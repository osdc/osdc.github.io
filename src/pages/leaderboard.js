import React from 'react';
import Link from 'gatsby-link';
import Octokit from '@octokit/rest';
import styled, { injectGlobal } from 'styled-components';
import Assistant from '../../styles/fonts/Assistant-ExtraLight.ttf';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faLongArrowAltLeft)


injectGlobal`
  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Assistant';
    src: url(${Assistant});
  }
`;

const BackButton = styled.span`
  position: fixed;
  top: 20px;
  left: 25px;
  font-family: 'Assistant', sans-serif;
  font-size: 20px;
  font-weight: 800;

  &:hover {
    cursor: pointer;
  }
   
`;

const Header = styled.h1`
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Assistant', sans-serif;
  font-size: 55px;
  font-weight: 300;
`;

const LeaderboardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80vh; 
  width: 100vw;
  margin-bottom: 100px;
  @media (max-width: 824px) {
    flex-direction: column;
  }
`;

const LeaderboardContainerLeft = styled.div`
  width: 40vw;
  height: 80vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  position: relative;
  @media (max-width: 824px) {
    width: 100vw;
    min-height: 60vh;
  }
`;

const LeftSpan = styled.span`
  position: absolute;
  left: 0;
  top: 45%;
  border: px solid red;
  transform: rotate(-90deg);
  font-family: 'Assistant', sans-serif;
  font-size: 25px;
  font-weight: 600;
  color: #607d8b;
   @media (max-width: 1220px) {
    display: none;
  }
`;

const RightBorder = styled.div`
  position: absolute;
  right: 0;
  height: 30vh;
  top: 30%;
  width: 1px;
  background-color: #e0e0e0;
  @media (max-width: 850px) {
    display: none;
  }
`;

const TopCards = styled.li`
  height: 150px;
  width: 300px;
  box-shadow: 0 4px 22px 0 rgba(0,0,0,0.3);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;

  &:hover {
    box-shadow: 0 4px 25px 0 rgba(0,0,0,0.5);
  }

`;

const TopCardsTop = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TopCardsTopLeft = styled.div`
  height: 100%;
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopCardsTopRight = styled.div`
  height: 100%;
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: 'Assistant', sans-serif;
  font-size: 25px;
  font-weight: 400;
  padding-left: 10px;
  padding-top: 17px;
  overflow: hidden !important;
`;

const TopCardsBottom = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 15px;
  // padding-bottom: 10px;
  font-family: 'Assistant', sans-serif;
  font-size: 20px;
  font-weight: 600;
`;

const LeaderboardContainerRight = styled.div`
  width: 60vw;
  max-height: 80vh;
  overflow-y: scroll;
  @media (max-width: 824px) {
    width: 100vw;
    margin-top: 60px;
  }
`;

const Leaderboard = styled.ol`
  padding: 0;
`;

const TopLeaders = styled.ol`
  padding: 0;
`;

const ListItem = styled.li`
  height: 90px;
  width: 350px;
  margin: 10px auto;
  font-size: 1.8rem;
  display: flex;
  // box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.2s ease-in-out;
  // border-radius: 3px;
  border: 1px solid #f5f5f5;
  background-color: #fafafa;
  &:hover {
    // box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }
`;

const Avatar = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  margin: 5px;
  margin-top: 15px;
  margin-left: 10px;
  border: 2px solid #eeeeee;
`;

const TopAvatar = styled.img`
  height: 90px;
  width: 90px;
  border-radius: 50%;
  margin-top: 20px;
  border: 2px solid #eeeeee;
`;

const Username = styled.a`
  flex-grow: 1;
  padding: 8px;
  height: 90px;
  display: flex;
  justify-content: flex-start;
  padding-left: 40px;
  align-items: center;
  font-family: 'Assistant', sans-serif;
  font-size: 20px;
  font-weight: 400;
  outline: none;
  text-decoration: none;
  color: black;

  &:hover {
    outline: none;
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  &:focus {
    outline: none;
    text-decoration: none;
    color: black;
  }
`;

const LeaderLink = styled.a`
  font-family: 'Assistant', sans-serif;
  font-weight: 600;
  outline: none;
  text-decoration: none;
  color: black;

  &:hover {
    outline: none;
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  &:focus {
    outline: none;
    text-decoration: none;
    color: black;
  }
`;


const Commits = styled.span`
  padding: 8px;
  width: 52px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #607d8b;
  font-family: 'Assistant', sans-serif;
  font-size: 25px;
  font-weight: 600;
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

export default class LeaderboardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { leaderboard: [] , topCards: [{ background : '#ffc400' , status : 'Gold' }, { background : '#cfd8dc' , status : 'Silver' }, { background : '#8d6e63' , status : 'Bronze' }] };
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
    console.log(this.octokit.state);
  }

  render() {
    const sorted = this.state.leaderboard.sort((a, b) => {
      return b.commits - a.commits;
    });

    let listLength = sorted.length;

    let standardCommits = sorted.slice(0);


    let topCommits = standardCommits.slice(0,3);

    standardCommits = standardCommits.splice(3,listLength);


    const commitList = standardCommits.map((user, i) => (
      <ListItem key={i}>
        <Avatar src={user.avatar} />
        <Username href={user.url} target="_blank">@{user.username}</Username>
        <Commits>{user.commits}</Commits>
      </ListItem>
    ));

    

    const topCommitList = topCommits.map((users, i) => (
      <TopCards key={i} style={{'backgroundColor' : this.state.topCards[i].background}}>
        <TopCardsTop>
          <TopCardsTopLeft><TopAvatar src={users.avatar} /></TopCardsTopLeft>
          <TopCardsTopRight>
            <LeaderLink href={users.url} target="_blank">@{users.username}</LeaderLink>
            <span style={{'fontSize': '20px', 'fontWeight': 400}} ><b>{users.commits}</b> Commits</span>
          </TopCardsTopRight>
        </TopCardsTop>
        <TopCardsBottom>{this.state.topCards[i].status}</TopCardsBottom>
      </TopCards>
    ));

    return (
      <div>
        <BackButton><Link to="/" style={{'outline' : 'none' ,'textDecoration' : 'none', 'color' : 'black'}} ><FontAwesomeIcon icon="long-arrow-alt-left" color="#445a64" size="2x" /></Link></BackButton>
        <Header>Leaderboard</Header>

        <LeaderboardContainer>
          <LeaderboardContainerLeft>
            <LeftSpan>Top Players</LeftSpan>
              <TopLeaders>
                {topCommitList}
              </TopLeaders>
            <RightBorder></RightBorder>
          </LeaderboardContainerLeft>

          <LeaderboardContainerRight>
            <Leaderboard>{commitList}</Leaderboard>
          </LeaderboardContainerRight>
        </LeaderboardContainer>

      </div>
    );
  }
}
