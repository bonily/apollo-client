import "./RepositoryTree.css";
import { useState } from "react";
import { RepositoryFile } from "./types";

export interface Props {
  file: RepositoryFile;
}

const RepoFileCode: React.FC<Props> = ({ file }) => {
  const { name, object } = file;
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="repository-tree__item" onClick={() => setOpen(!open)}>
        <svg
          aria-label="File"
          aria-hidden="true"
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
        >
          <path
            fill-rule="evenodd"
            d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"
          ></path>
        </svg>
        <p className="repository-tree__item-name">{name}</p>
      </div>
      {open && <code>{object.text}</code>}
    </>
  );
};

export default RepoFileCode;