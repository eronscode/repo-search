import { useState } from "react";
import Button from "components/Button";
import Input from "components/Input";
import isEmpty from "lodash/isEmpty";
import { SearchContainer } from "./styles";
import Card from "components/Card";
import repoService from "hooks/useRepoSevice";
import { CardLoader, ErrorUI } from "utils/placeholders";

function SearchPanel() {
  const [value, setValue] = useState("");
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState(null);

  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    repoService.useFetchRepos(page, searchQuery, {
      enabled: !!searchQuery,
      keepPreviousData: true,
    });

  function handleInputChange(e) {
    setValue(e.target.value);
  }

  function handleSearch(params) {
    setSearchQuery(value);
  }

  console.log({ data });

  return (
    <SearchContainer>
      <h1>Find Github Repos</h1>
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
          <Button variant='primary' onClick={handleSearch}>
            Search
          </Button>
        </div>
      </div>
      <div className='search-result'>
          <CardLoader className="search-item" />
        {isLoading ? (
          <p> loading ...</p>
        ) : isError ? (
          <ErrorUI />
        ) : (
          !isEmpty(data) && (
            <>
              {renderCardList()}
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
          )
        )}
      </div>
    </SearchContainer>
  );
}

function renderCardList(params) {
  return (
    <>
      <div className='search-item'>
        <Card />
      </div>
      <div className='search-item'>
        <Card />
      </div>
      <div className='search-item'>
        <Card />
      </div>
      <div className='search-item'>
        <Card />
      </div>
    </>
  );
}

export default SearchPanel;
