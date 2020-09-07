import React from "react";
import "styles/List.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

const List = (props) => {
  const { repos } = props;
  if (repos === null) return <h2 className="heading">No repos, sorry.</h2>;
  return (
    <div>
      <h2 className="heading">Available public repositories({repos.length})</h2>
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
                  <a id="repo-name" href={repo.html_url}>{repo.name}</a>
                </td>
                <td id="language-name">
                  {repo.language === null ? (
                    <FontAwesomeIcon icon={faCircle} />
                  ) : (
                    repo.language
                  )}
                </td>
                <td>
                  {repo.fork === true ? (
                    <FontAwesomeIcon
                      size="lg"
                      color="#0CCE23"
                      icon={faCheckCircle}
                    />
                  ) : (
                    <FontAwesomeIcon
                      size="lg"
                      color="#D30404"
                      icon={faTimesCircle}
                    />
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
