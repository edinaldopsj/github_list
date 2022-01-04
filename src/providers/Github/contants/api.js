export const GITHUB_API = {
  POST_GRAPHQL_QUERY: `https://api.github.com/graphql`,
  LIST_USER_DETAILS: 'https://api.github.com/users/{userName}',
  LIST_USER_REPOS: 'https://api.github.com/users/{userName}/repos',

  GET_REPO_DETAILS: 'https://api.github.com/repos/{userName}/{repoName}',
  GET_REPO_CONTRIBUTORS:
    'https://api.github.com/repos/{userName}/{repoName}/contributors',
};
