import React from "react";
import "styles/List.scss";

const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <h2>No repos, sorry.</h2>;
  return (
    <div>
      <h2>Available public repositories</h2>
      <ul>
        <table>
          <tr>
            <th>Name</th>
            <th>Language</th>
            {/* <th>License</th> */}
          </tr>
          {repos.slice(0, -1).map((repo) => {
            return (
              <tr>
                <td>
                  <a href={repo.html_url}>{repo.name}</a>
                </td>
                <td>{repo.language}</td>
                {/* <td>{repo.license.key}</td> */}
              </tr>
            );
          })}
        </table>
      </ul>
    </div>
  );
};

export default List;
