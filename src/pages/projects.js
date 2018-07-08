import React from 'react';
import Link from 'gatsby-link';
import Octokit from '@octokit/rest';
import styled, { injectGlobal } from 'styled-components';
import Assistant from '../../styles/fonts/Assistant-ExtraLight.ttf';

// function addCommit(prevState, user) {
//   if (!user) {
//     return prevState;
//   } else {
//     const username = user.login;
//     const prevLeaderboard = prevState.leaderboard;
//     let index;
//     const result = prevLeaderboard.find((user, i) => {
//       if (user.username === username) {
//         index = i;
//         return true;
//       }
//     });
//     if (!result) {
//       return {
//         leaderboard: [
//           ...prevLeaderboard,
//           { username, commits: 1, avatar: user.avatar_url, url: user.html_url }
//         ]
//       };
//     } else {
//       let newLeaderboard = prevLeaderboard;
//       newLeaderboard[index].commits += 1;
//       return { leaderboard: newLeaderboard };
//     }
//   }
// }

function addProject(prevState, repo) {
  if(!repo) {
    return prevState;
  }

  else {
    const previousProjects = prevState.projects;
    return {
      projects: [...previousProjects, {reponame : repo.name , forks : repo.forks, updatedat : repo.updated_at, stars : repo.stargazers_count}]
    }
  }
}

export default class Projects extends React.Component {
	constructor(props) {
		super(props);
		this.state = {projects : []};
    this.octokit = new Octokit();
	}

	getLeaderboard() {
    this.octokit.repos.getForOrg({ org: 'osdc' }).then(repos => {
      repos.data.forEach((repo) => {
        this.setState(prevState => addProject(prevState, repo));
      });
    });
  }

  componentDidMount() {
    this.getLeaderboard();
  }

	render() {

    const sortByForks = this.state.projects.sort((a, b) => {
      return b.forks - a.forks;
    });

    console.log(this.state.projects);
    console.log("--------------------------------");
    console.log(sortByForks);

    const sortByLastupdated = this.state.projects.sort((a, b) => {
      return b.updatedat - a.updatedat;
    });



    const list = this.state.projects.map((project, i) => (
      <li key={i}>{project.reponame} || {project.forks} || {project.updatedat} || {project.stars}</li>
    ));

		return(
      <div>
        <br />
        <span>List of projects</span>
        <ul>
          {list}
        </ul>
      </div>
		);
	}
}