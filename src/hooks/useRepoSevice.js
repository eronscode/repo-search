import { useQuery } from "react-query";
import { queryKeys } from "config/queryKeys";
import api from "utils/api";
import { ApiEndpoints } from "utils/endpoints";

async function fetchRepos(page = 0, query) {
  const response = await api.get(ApiEndpoints.SEARCH_REPO(query, page));
  return response;
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  useFetchRepos: (page, query, ...args) =>
    useQuery([queryKeys.repos, page], () => fetchRepos(page, query), ...args),
};
