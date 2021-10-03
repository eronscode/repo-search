import styled from "styled-components";
import { color, font } from "styles/styleUtils";

export const CardContainer = styled.div`
  width: 100%;
  background-color: ${color.white};
  padding: 20px;
  text-align: center;
  .image-container {
    height: 80px;
    width: 80px;
    border-radius: 50px;
    overflow: hidden;
    text-align: center;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .info-details {
    display: block;
    margin: 15px 0 0 0;
    padding: 0;
    li {
      list-style-type: none;
      margin-bottom: 20px;
      text-transform: capitalize;
      span {
        color: ${color.darkGrey};
      }
    }
  }

  .footer > p {
    ${font.size(17)}
    ${font.bold}
    margin-bottom: 20px;
  }

  .footer-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footer-items {
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
    &:last-child {
      margin-left: -14px;
    }
  }
`;
