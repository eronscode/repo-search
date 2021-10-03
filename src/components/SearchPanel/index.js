import { useState } from "react";
import Button from "components/Button";
import Input from "components/Input";
import { SearchContainer } from "./styles";
import Card from "components/Card";

function SearchPanel() {
  const [value, setValue] = useState("");

  function handleInputChange(e) {
    setValue(e.target.value);
  }

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
          <Button variant='primary' onClick={() => null}>
            Search
          </Button>
        </div>
      </div>
      <div className='search-result'>{renderCardList()}</div>
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
