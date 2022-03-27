import "./RepositoriesList.css";
import React from "react";
import { GetRepositoriesQuery } from "../../graphql";

import RepositoryItem from "./RepositoryItem";

export type Repository = NonNullable<
  GetRepositoriesQuery["search"]["edges"]
>[number];

interface Props {
  repos: readonly (Repository | null)[];
}

const ReposList: React.FC<Props> = ({ repos }) => {
  return (
    <ul className="repositories-list">
      {repos.map((repo) => {
        return (
          repo?.node?.__typename === "Repository" && (
            <li key={repo.node.id}>
              <RepositoryItem repo={repo} />
            </li>
          )
        );
      })}
    </ul>
  );
};

export default ReposList;
