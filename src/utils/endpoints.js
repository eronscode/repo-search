export const ApiEndpoints = {
  SEARCH_REPO: (query="", page="", per_page="") => `search/repositories?q=${query}&page=${page}&per_page=${per_page}`,
};
