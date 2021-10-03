import styled from "styled-components";
import { color, font, mixins } from "styles/styleUtils";

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
    width: 82%;
    input {
      height: 50px;
    }
  }

  .search-result {
    display: flex;
    flex-wrap: wrap;
    margin: 10px 10px;
  }
  .search-result-title {
    margin: 50px 15px;
    span {
      ${font.bold}
    }
  }
  .pagination-container {
    text-align: center;
    button {
      ${mixins.clickable}
    }
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
      margin: 30px 70px 50px 70px;
    }
    .search-result-title {
      margin: 17px 85px 0;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const ContributorsWrapper = styled.div`
  padding: 0 20px;
  height: 350px;
  ${mixins.scrollableY}
  ${mixins.customScrollbar}
  .contributions {
    ${font.size(12)};
    color: ${color.darkGrey};
  }
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
    .image-wrapper {
      display: flex;
      align-items: center;
      p {
        margin-left: 10px;
      }
    }
    .image {
      height: 40px;
      width: 40px;
      border-radius: 50px;
      overflow: hidden;
      background: ${color.darkGrey};
      color: ${color.white};
      text-align: center;
      vertical-align: center;
      margin: 0 4px 0 0;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
