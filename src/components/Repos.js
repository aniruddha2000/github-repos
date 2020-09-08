import React, { Component } from "react";
import axios from "axios";
import List from "./List";

export class Repos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: null,
    };
  }

  // async componentDidMount() {
  //   const apiUrl = "https://api.github.com/users/aniruddha2000/repos?per_page=100";
  //   const response = await fetch(apiUrl);
  //   const repos = await response.json();
  //   console.log(repos);
  //   this.setState({ repos: repos });
  // }
  componentDidMount() {
    const apiUrl =
      "https://api.github.com/users/aniruddha2000/repos?per_page=100";
    axios.get(apiUrl).then((response) => {
      this.setState({ repos: response.data });
    });
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
