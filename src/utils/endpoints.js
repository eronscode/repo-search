export const ApiEndpoints = {
  SEARCH_REPO: (query="", page="", per_page="") => `search/repositories?q=${query}&page=${page}&per_page=${per_page}`,
  //GET_ORG_REPOS: (org) => `repos/typescript-cheatsheets/react/contributors`,
  //SEARCH_ORGS_REPOS_BY_KEYWORD: (query="", org="", per_page=100) => `search/repositories?q=${query} in:name,description+org:${org}&per_page=${per_page}`,
};
