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
      <h1>Find Repos</h1>
      <div className='search-form'>
        <div>
          <Input
            placeholder='Type in keyword to search'
            onChange={handleInputChange}
            value={value}
          />
        </div>
        <div>
          <Button variant='primary' onClick={() => null}>
            Search
          </Button>
        </div>
      </div>
      <div className='search-result'>
          {renderCardList()}
      </div>
    </SearchContainer>
  );
}

function renderCardList(params) {
    return(
        <Card />
    )
}

export default SearchPanel;
