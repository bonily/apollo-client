import "./RepositoryItem.css";
import React from "react";
import { Link } from "react-router-dom";
import { Repository } from "../RepositoriesList";

interface Props {
  repo: Repository;
}

const RepositoryItem: React.FC<Props> = ({ repo }) => {
  const ownerLogin =
    repo?.node?.__typename === "Repository" ? repo.node.owner.login : null;
  const repoName =
    repo?.node?.__typename === "Repository" ? repo.node.name : null;

  return (
    <>
      {repo?.node?.__typename === "Repository" && (
        <div className="repository__item">
          <Link to={`/${ownerLogin}/${repoName}`}>
            <span className="repository__item-header">
              <img
                src={repo.node?.owner?.avatarUrl}
                alt={repo.node.owner.login}
                height={40}
                width={40}
              />
              <span>
                {ownerLogin}/{repoName}
              </span>
            </span>

            <div className="repository__item-discription">
              {repo.node.description}
              <div className="repository__item-langs">
                {repo.node.languages?.nodes &&
                  repo.node.languages.nodes.map((lang) => {
                    return (
                      lang?.id && (
                        <span
                          key={lang.id}
                          style={{ backgroundColor: `${lang?.color}` }}
                          className="repository__item-lang"
                        >
                          {lang?.name}
                        </span>
                      )
                    );
                  })}
              </div>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default RepositoryItem;
