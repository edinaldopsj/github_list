import axiosInstance from 'config/axios';

import { formatString } from 'helpers/formatString';

import { GITHUB_API } from './contants/api';
import query from './contants/query';

export async function getGitHubData() {
  const gitHubCall = await axiosInstance.post(GITHUB_API.POST_GRAPHQL_QUERY, {
    query,
  });

  return gitHubCall.data.data;
}

export async function getUserDetails({ userName }) {
  const url = formatString(GITHUB_API.LIST_USER_DETAILS, { userName });

  return axiosInstance.get(url);
}

export async function getUserRepos({ userName }) {
  const url = formatString(GITHUB_API.LIST_USER_REPOS, { userName });

  return axiosInstance.get(url);
}

export async function getRepoDetails({ userName, repoName }) {
  const url = formatString(GITHUB_API.GET_REPO_DETAILS, { userName, repoName });

  return axiosInstance.get(url);
}

export async function getRepoContributors({ userName, repoName }) {
  const url = formatString(GITHUB_API.GET_REPO_CONTRIBUTORS, {
    userName,
    repoName,
  });

  return axiosInstance.get(url);
}
