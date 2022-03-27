module.exports = {
  client: {
    includes: ["src/**/*.gql"],
    service: {
      name: "github",
      url: "https://api.github.com/graphql",
      headers: {
        Authorization: `Bearer YOUR_GITHUB_TOKEN`,
      },
    },
  },
};