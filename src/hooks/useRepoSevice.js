import { useQuery } from "react-query";
import { queryKeys } from "config/queryKeys";
import api from "utils/api";
import { ApiEndpoints } from "utils/endpoints";

async function fetchRepos(page = 0, query) {
  const response = await api.get(ApiEndpoints.SEARCH_REPO(query, page, 18));
  return response;
}

async function fetchRepoContributor(url) {
  const response = await fetch(`${url}?per_page=100`);
  const contributors = await response.json();
  return contributors;
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  useFetchRepos: (page, query, ...args) =>
    useQuery(
      [queryKeys.repos, page, query],
      () => fetchRepos(page, query),
      ...args
    ),
  useFetchRepoContributor: (url, username, ...args) =>
    useQuery(
      [queryKeys.repoContrubutors, username],
      () => fetchRepoContributor(url),
      ...args
    ),
};
