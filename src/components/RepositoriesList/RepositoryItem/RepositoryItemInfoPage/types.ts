export interface RepositoryFile {
  name: string;
  type: "blob" | "tree" | string;
  object: {
    entries?: readonly RepositoryFile[] | null;
    text?: string | null;
    byteSize?: number;
  };
}
