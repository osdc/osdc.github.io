import React from 'react';
import Octokit from '@octokit/rest';
import Link from "gatsby-link";
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  * {
    box-sizing: border-box;
  }
`;

const Header = styled.h1`
  text-align: center;
`;

const Leaderboard = styled.ol`
  padding: 0;
`;

const ListItem = styled.li`
  height: 54px;
  width: 350px;
  margin: 10px auto;
  font-size: 1.8rem;
  display: flex;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.2s ease-in-out;
  border-radius: 3px;
  border: 1px solid rgba(0,0,0,0.16);

  &:hover {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }
`;

const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 5px;
`;

const Username = styled.span`
  flex-grow: 1;
  padding: 8px;
  text-align: center;
`;

const Commits = styled.span`
  padding: 8px;
  width: 52px;
  text-align: center;
  background: rgba(0,0,0,0.12);
  color: white;
`;
 const Linkmain = styled.li`
  display: inline-block;
  font-size: 2.5rem;
  padding: 12px;
`;
const Linknormal = styled.li`
  display: inline-block;
  font-size: 1.5rem;
  padding: 12px;
`;
const HeadLinks = styled.ul`
  list-style: none;
`;
function addCommit(prevState, user) {
  if (!user) {
    return prevState;
  } else {
    const username = user.login;
    const prevLeaderboard = prevState.leaderboard;
    let index;
    const result = prevLeaderboard.find((user, i) => {
      if (user.username === username) {
        index = i;
        return true;
      }
    });
    if (!result) {
      return {
        leaderboard: [
          ...prevLeaderboard,
          { username, commits: 1, avatar: user.avatar_url, url: user.html_url }
        ]
      };
    } else {
      let newLeaderboard = prevLeaderboard;
      newLeaderboard[index].commits += 1;
      return { leaderboard: newLeaderboard };
    }
  }
}

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { leaderboard: [] };
    this.octokit = new Octokit();
  }

  getLeaderboard() {
    this.octokit.repos.getForOrg({ org: 'osdc' }).then(repos => {
      repos.data.forEach(({ name }) => {
        this.octokit.repos.getCommits({ owner: 'osdc', repo: name }).then(commits => {
          commits.data.forEach(commit => {
            const { committer, author } = commit;
            this.setState(prevState => addCommit(prevState, committer));
            this.setState(prevState => addCommit(prevState, author));
          });
        });
      });
    });
  }

  componentDidMount() {
    this.getLeaderboard();
  }

  render() {
    const sorted = this.state.leaderboard.sort((a, b) => {
      return b.commits - a.commits;
    });
    const commitList = sorted.map((user, i) => (
      <ListItem key={i}>
        <Avatar src={user.avatar} />
        <Username>{user.username}</Username>
        <Commits>{user.commits}</Commits>
      </ListItem>
    ));

    return (    
      <div>
        <HeadLinks>
        <Linkmain><Link to="/">OPEN SOURCE DEVELOPERS CLUB</Link></Linkmain>
        <Linknormal><Link to="/leaderboard">Community</Link></Linknormal>
        <Linknormal><Link to="/About">About</Link></Linknormal>
      </HeadLinks>
        <Header>Leaderboard</Header>
        <Leaderboard>{commitList}</Leaderboard>
      </div>
    );
  }
}
