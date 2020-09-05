import React from "react";
import "styles/List.scss";

const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <h2>No repos, sorry.</h2>;
  return (
    <div>
      <h2>Available public repositories</h2>
      <ul>
        {repos.map((repo) => {
          return (
            <li key={repo.id} className="list">
              <a href={repo.html_url} className="repo-text">{repo.name} </a>
              <span className="repo-description">{repo.description}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
