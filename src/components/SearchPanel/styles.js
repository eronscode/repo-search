import styled from "styled-components";

export const SearchContainer = styled.div`
  padding: 0 50px;
  margin: 70px 0;
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  .search-form {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .input-container {
    width: 70%;
    input {
      height: 50px;
    }
  }

  .search-result {
    display: flex;
    flex-wrap: wrap;
    margin: 50px 10px;
  }

  .search-item {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
  }

  @media screen and (min-width: 966px) {
    .search-item {
      flex: 0 0 auto;
      width: 33.33333333%;
      padding: 0 0 50px 20px;
    }

    .search-result {
      margin: 50px 70px;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;
