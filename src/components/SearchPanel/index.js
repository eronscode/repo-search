import { useEffect, useRef, useState } from "react";
import isEmpty from "lodash/isEmpty";

import { ContributorsWrapper, SearchContainer } from "./styles";
import Button from "components/Button";
import Input from "components/Input";
import Card from "components/Card";
import repoService from "hooks/useRepoSevice";
import { CardLoader, ErrorUI, NoData } from "utils/placeholders";
import Modal from "components/Modal";
import { ITEMS_PER_PAGE } from "utils/constants";

function SearchPanel() {
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [contributorsUrl, setContributorsUrl] = useState(null);
  const [currentRepo, setCurrentRepo] = useState(null);
  const containerRef = useRef();

  const { status, isError, data, isFetching, isPreviousData } =
    repoService.useFetchRepos(page, searchQuery, {
      enabled: !!searchQuery,
      keepPreviousData: true,
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
    setPage(1);
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

  useEffect(() => {
    containerRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }, [page]);

  const pageLength = Math.ceil(data?.total_count / ITEMS_PER_PAGE);
  const isFetchingData = status === "loading" || isFetching;
  

  return (
    <SearchContainer ref={containerRef}>
      <h1>Find Github Repos</h1>
      {renderSearchForm(value, handleSearch, handleInputChange)}
      {!isEmpty(data?.items) && (
        <div className='search-result-title'>
          <p>
            Showing results for search query - '{searchQuery}'{" "}
          </p>
          <p>{!isFetchingData && (
              <>
                <span>Total: {data?.total_count}  </span>
              </>
            )}</p>
        </div>
      )}
      <div className='search-result'>
        {isFetchingData ? (
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
              </>
            )}
          </>
        )}
      </div>
      {!isEmpty(data?.items) &&
        renderPagination(page, setPage, isPreviousData, data, pageLength)}
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
    <div key={repo.id} className='search-item'>
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
  );
}

function renderContributorsResult(data = []) {
  return (
    <ContributorsWrapper>
      {data?.map((item) => (
        <li key={item.id}>
          <div className='image-wrapper'>
            <div className='image'>
              <img src={item.avatar_url} alt={item.login} />
            </div>
            <p>{item.login}</p>
          </div>
          <p className='contributions'>{item.contributions} contributions</p>
        </li>
      ))}
    </ContributorsWrapper>
  );
}

function renderPagination(page, setPage, isPreviousData, data, pageLength) {
  return (
    <div className='pagination-container'>
      <button
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 1}
      >
        Previous Page
      </button>{" "}
      <button
        onClick={() => {
          setPage((old) => (pageLength !== page ? old + 1 : old));
        }}
        disabled={isPreviousData || pageLength === page || pageLength === 0}
      >
        Next Page
      </button>
    </div>
  );
}

export default SearchPanel;
