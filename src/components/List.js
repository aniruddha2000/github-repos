import React from "react";
import "styles/List.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const List = (props) => {
  const { repos } = props;
  if (repos === null) return <h2>No repos, sorry.</h2>;
  return (
    <div>
      <h2>Available public repositories</h2>
      <ul>
        <table>
          <tr>
            <th>Name</th>
            <th>Language</th>
            <th>Forked</th>
          </tr>
          {repos.slice(0, -1).map((repo) => {
            return (
              <tr>
                <td>
                  <a href={repo.html_url}>{repo.name}</a>
                </td>
                <td>{repo.language === null ? "*" : repo.language}</td>
                <td>
                  {/* <FontAwesomeIcon size="lg" icon={faCheckCircle} /> */}
                  {repo.fork === true ? (
                    <FontAwesomeIcon size="lg" color="#0CCE23" icon={faCheckCircle} />
                  ) : (
                    <FontAwesomeIcon size="lg" color="#D30404" icon={faTimesCircle} />
                  )}
                </td>
              </tr>
            );
          })}
        </table>
      </ul>
    </div>
  );
};

export default List;
