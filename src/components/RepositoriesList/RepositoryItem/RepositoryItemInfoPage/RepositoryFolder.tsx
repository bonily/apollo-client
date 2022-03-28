import "./RepositoryTree.css";
import { useState } from "react";
import { useGetRepositoryFileInfoQuery } from "../../../../graphql";
import { RepositoryFile } from "./types";

import RepositoryTree from "./RepositoryTree";
import Loading from "../../../Loading";
import Error from "../../../Error";

export interface Props {
  file: RepositoryFile;
  path: string;
}
const RepoFolder: React.FC<Props> = ({ file, path }) => {
  const currentPath = `${path}${file.name}/`;
  const { name } = file;
  const { data, loading, error } = useGetRepositoryFileInfoQuery({
    variables: {
      owner: file.repository.owner.login,
      name: file.repository.name,
      path: currentPath,
    },
  });

  const [open, setOpen] = useState(false);

  const entries =
    data?.repository?.object?.__typename === "Tree"
      ? (data.repository.object.entries as readonly RepositoryFile[])
      : [];

  return (
    <>
      <div className="repository-tree__item" onClick={() => setOpen(!open)}>
        <svg
          aria-label="Directory"
          aria-hidden="true"
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          fill="lightblue"
        >
          <path d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z"></path>
        </svg>

        <p className="repository-tree__item-name">{name}</p>
      </div>
      {open && <RepositoryTree files={entries} path={currentPath} />}
      {open && loading && <Loading />}
      {open && error && <Error error={error.message} />}
    </>
  );
};

export default RepoFolder;
