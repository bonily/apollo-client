import "./RepositoryTree.css";
import { sortFiles } from "./utils";
import { RepositoryFile } from "./types";

import RepositoryFileCode from "./RepositoryFileCode";
import RepositoryFolder from "./RepositoryFolder";

export interface Props {
  files: readonly RepositoryFile[];
}

const RepositoryTree: React.FC<Props> = ({ files }) => {
  return (
    <div>
      <ul className="repository-tree__list">
        {files &&
          files.length > 0 &&
          sortFiles(files).map((file) => {
            return (
              <li key={file.name}>
                {file.type === "blob" && <RepositoryFileCode file={file} />}
                {file.type === "tree" && <RepositoryFolder file={file} />}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default RepositoryTree;
