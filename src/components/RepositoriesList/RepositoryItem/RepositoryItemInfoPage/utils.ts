import { RepositoryFile } from "./types";

export const sortFiles = (files: readonly RepositoryFile[]) => {
  const sortedFiles = [...files].sort((file) => {
    if (file.type === "blob") return 1;
    if (file.type === "tree") return -1;
    return 0;
  });
  return sortedFiles;
};
