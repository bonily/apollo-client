import { gql } from "@apollo/client";

export const ALL_REPOS_QUERY = gql`
  query {
    search(type: REPOSITORY, query: "is:public", first: 20, after: "Y3Vyc29yOjIw") {
      repositoryCount
      pageInfo {
        endCursor
        startCursor
      }
      edges {
        node {
          ... on Repository {
            name
            homepageUrl
            description
            owner {
              login
              avatarUrl
            }
            languages(first: 20) {
              nodes {
                name
                color
              }
            }
          }
        }
      }
    }
  }
`;
