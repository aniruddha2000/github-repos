import React, { Component } from "react";
import List from "./List";

export class Repos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: null,
    };
  }

  async componentDidMount() {
    const apiUrl = "https://api.github.com/users/aniruddha2000/repos?per_page=100";
    const response = await fetch(apiUrl);
    const repos = await response.json();
    console.log(repos);
    this.setState({ repos: repos });
  }
  render() {
    return (
      <div>
        <List repos={this.state.repos} />
      </div>
    );
  }
}

export default Repos;
