import { useState } from "react";
import Button from "components/Button";
import Input from "components/Input";
import isEmpty from "lodash/isEmpty";
import { ContributorsWrapper, SearchContainer } from "./styles";
import Card from "components/Card";
import repoService from "hooks/useRepoSevice";
import { CardLoader, ErrorUI, NoData } from "utils/placeholders";
import Modal from "components/Modal";

function SearchPanel() {
  const [value, setValue] = useState("");
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [contributorsUrl, setContributorsUrl] = useState(null);
  const [currentRepo, setCurrentRepo] = useState(null);

  const { status, isError, error, data, isFetching, isPreviousData } =
    repoService.useFetchRepos(page, searchQuery, {
      enabled: !!searchQuery,
    });

  const {
    isLoading: isLoadingContributors,
    isError: isErrorContributors,
    data: contributors,
  } = repoService.useFetchRepoContributor(contributorsUrl, currentRepo, {
    enabled: !!contributorsUrl,
  });

  function handleInputChange(e) {
    setValue(e.target.value);
  }

  function handleSearch() {
    setSearchQuery(value);
  }

  function handleToggleContributors(args) {
    const { username, contributors_url } = args;
    setContributorsUrl(contributors_url);
    setCurrentRepo(username);
    setIsOpen((prev) => !prev);
  }

  if (isError) {
    setSearchQuery(null);
  }

  console.log({ data, contributors, currentRepo, status, isFetching });

  return (
    <SearchContainer>
      <h1>Find Github Repos</h1>
      {renderSearchForm(value, handleSearch, handleInputChange)}
      {!isEmpty(data?.items) && (
        <div className='search-result-title'>
          <p>Showing results for '{searchQuery}' </p>
          <p>Total: {data?.total_count} </p>
        </div>
      )}
      <div className='search-result'>
        {status === "loading" || isFetching ? (
          <CardLoader className='search-item' />
        ) : isError ? (
          <ErrorUI onError={handleSearch} />
        ) : (
          <>
            {data?.items.length === 0 && (
              <NoData text='Sorry! No result found for the search query!' />
            )}
            {!isEmpty(data?.items) && (
              <>
                {data?.items?.map((repo) =>
                  renderSearchResult(repo, handleToggleContributors)
                )}
                {isOpen && (
                  <Modal
                    ModalTitle={`Contributors for ${currentRepo}`}
                    toggleModal={() => setIsOpen((prev) => !prev)}
                    isOpen={isOpen}
                  >
                    {isLoadingContributors ? (
                      <p style={{ textAlign: "center" }}>Loading...</p>
                    ) : isErrorContributors ? (
                      <p style={{ textAlign: "center" }}>
                        Error Fetching Contributors
                      </p>
                    ) : (
                      !isEmpty(contributors) &&
                      renderContributorsResult(contributors)
                    )}
                  </Modal>
                )}
                <div className='pagination-container'>
                  <button
                    onClick={() => setPage((old) => Math.max(old - 1, 0))}
                    disabled={page === 0}
                  >
                    Previous Page
                  </button>{" "}
                  <button
                    onClick={() => {
                      setPage((old) => (data?.hasMore ? old + 1 : old));
                    }}
                    disabled={isPreviousData || !data?.hasMore}
                  >
                    Next Page
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </SearchContainer>
  );
}

function renderSearchForm(value, handleSearch, handleInputChange) {
  return (
    <div className='search-form'>
      <div className='input-container'>
        <Input
          placeholder='Type in keyword to search'
          onChange={handleInputChange}
          value={value}
          type='search'
        />
      </div>
      <div className='button-container'>
        <Button variant='primary' disabled={!value} onClick={handleSearch}>
          Search
        </Button>
      </div>
    </div>
  );
}

function renderSearchResult(repo = {}, toggleContributors = () => null) {
  function handleToggleContributors(repo) {
    const payload = {
      username: repo?.owner?.login,
      contributors_url: repo?.contributors_url,
    };
    toggleContributors(payload);
  }

  return (
    <>
      <div className='search-item'>
        <Card
          open_issues={repo.open_issues_count}
          full_name={repo.full_name}
          avatar_url={repo.owner.avatar_url}
          username={repo.owner.login}
          stars={repo.stargazers_count}
          forks={repo.forks_count}
          toggleContributors={() => handleToggleContributors(repo)}
        />
      </div>
    </>
  );
}

function renderContributorsResult(data = []) {
  return (
    <ContributorsWrapper>
      {data.map((item) => (
        <li>
          <div className='image-wrapper'>
            <div className='image'>
              <img src={item?.avatar_url} alt={item?.login} />
            </div>
            <p>{item?.login}</p>
          </div>
          <p className='contributions'>{item.contributions} contributions</p>
        </li>
      ))}
    </ContributorsWrapper>
  );
}

export default SearchPanel;
