export default ` 
query listReactGithubUsers {
  organization(login: "reactjs") {
    membersWithRole(first: 10) {
      totalCount
      edges {
        node {
          id
          login
          name
          avatarUrl
          followers {
            totalCount
          }
          gists {
            totalCount
          }
          contributionsCollection {
            totalCommitContributions
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
`;
