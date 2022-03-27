import { useParams } from "react-router-dom";
import { useGetRepositoryInfoQuery } from "../../../../graphql";
import Loading from "../../../Loading";
import Error from "../../../Error";
import RepositoryTree from "./RepositoryTree";
import { RepositoryFile } from "./types";

const RepositoryItemInfoPage = () => {
  const { owner = "", name = "" } = useParams();
  const { loading, error, data } = useGetRepositoryInfoQuery({
    variables: { owner, name },
  });

  const entries =
    data?.repository?.object?.__typename === "Tree"
      ? (data.repository.object.entries as readonly RepositoryFile[])
      : [];

  return (
    <div className="repository-tree__page">
      <h2>
        {owner}/{name}
      </h2>
      {loading && <Loading />}
      {error && <Error error={error.message} />}
      {entries && <RepositoryTree files={entries} />}
    </div>
  );
};

export default RepositoryItemInfoPage;
