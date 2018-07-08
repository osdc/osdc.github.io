import React from 'react';
import Link from 'gatsby-link';
import Octokit from '@octokit/rest';
import styled, { injectGlobal } from 'styled-components';
import Assistant from '../../styles/fonts/Assistant-ExtraLight.ttf';

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
		this.state = {projects : [] , sortBy : ''};
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

    const projectList = this.state.projects.slice(0);

    let sortByForks = projectList.sort((a, b) => {
      return b.forks - a.forks;
    });

    // let sortByStars = sorted.sort((a, b) => {
    //   return b.stars - a.stars;
    // });

    // let sortByUpdatedat = projectList.sort((a, b) => {
    //   return b.updatedat - a.updatedat;
    // });


    console.log(sortByForks);

    const list = this.state.projects.map((project, i) => (
      <li key={i}>{project.reponame} || {project.forks} || {project.updatedat} || {project.stars}</li>
    ));

		return(
      <div>
        <button onClick={() => this.setState({sortBy : 'stars'})}>Sort by stars</button>
        <br />
        <span>List of projects</span>
        <ul>
          {list}
        </ul>
      </div>
		);
	}
}