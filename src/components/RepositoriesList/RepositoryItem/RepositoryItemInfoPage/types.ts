export interface RepositoryFile {
  name: string;
  type: "blob" | "tree" | string;
  repository: {
    name: string;
    owner: {
      login: string;
    };
  };
  object: {
    entries?: readonly RepositoryFile[] | null;
    text?: string | null;
    byteSize?: number;
  };
}
