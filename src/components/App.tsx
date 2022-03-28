import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useGetRepositoriesLazyQuery } from "../graphql";

import Header from "./Header/";
import RepositoriesList from "./RepositoriesList/";
import ReposItemInfoPage from "./RepositoriesList/RepositoryItem/RepositoryItemInfoPage";
import Loading from "./Loading";
import Error from "./Error";

const REPOS_COUNT = 20;

function App() {
  const [getPublicRepos, { loading, error, data, fetchMore }] =
    useGetRepositoriesLazyQuery();
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const loadMoreRepos = (after: string | null) => {
    setIsLoadingMore(true);
    fetchMore({
      variables: {
        first: REPOS_COUNT,
        after: after,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        setIsLoadingMore(false);
        if (!fetchMoreResult) return prev;
        const prevResult = prev.search?.edges || [];

        const moreResult = fetchMoreResult.search.edges || [];
        return {
          ...prev,
          search: {
            ...prev.search,
            edges: [...prevResult, ...moreResult],
          },
        };
      },
    });
  };

  return (
    <BrowserRouter>
      <div className="App"></div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                fetchRepos={() =>
                  getPublicRepos({
                    variables: { first: REPOS_COUNT, after: null },
                  })
                }
                showButton={!data}
                repositoriesCount={data?.search?.repositoryCount}
              />

              <RepositoriesList repos={data?.search.edges || []} />
              {(loading || isLoadingMore) && <Loading />}
              {error && <Error error={error.message} />}
              {data && (
                <button
                  onClick={() =>
                    loadMoreRepos(data?.search.pageInfo.endCursor || null)
                  }
                  className="load-more-button"
                >
                  Загрузить еще
                </button>
              )}
            </>
          }
        ></Route>
        <Route path="/:owner/:name" element={<ReposItemInfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
