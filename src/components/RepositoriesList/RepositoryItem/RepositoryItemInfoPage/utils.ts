export const sortFiles = (files: any) => {
  console.log(files)
  const sortedFiles = [...files].sort((file: any) => {
    if(file.type === "blob") return 1;
    if(file.type === "tree") return -1;
    return 0;
  });
  return sortedFiles;
}