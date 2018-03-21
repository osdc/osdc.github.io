import React from 'react';
import Octokit from '@octokit/rest';

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
      <li key={i}>
        <img src={user.avatar} />
        <a href={user.url} target="_blank">
          {user.username}
        </a>{' '}
        ==> {user.commits}
      </li>
    ));

    return (
      <div>
        <h1>Leaderboard</h1>
        <ol>{commitList}</ol>
      </div>
    );
  }
}
