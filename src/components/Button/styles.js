import styled, { css } from "styled-components";
import { color, font, mixins } from "styles/styleUtils";

const StyledButton = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  line-height: 1;
  padding: 10px 12px;
  white-space: nowrap;
  transition: all 0.1s;
  appearance: none;
  border: 3px solid ${color.blue};
  outline: 0;
  text-transform: capitalize;
  min-width: 100%;
  line-height: 25px;
  letter-spacing: 0.07em;
  ${mixins.clickable}
  ${font.size(16)}
  ${(props) => buttonVariants[props.variant]}
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const buttonVariants = {
  primary: css`
    color: ${color.white};
    background: ${color.blue};
  `,
  secondary: css`
    color: ${color.blue};
    background: ${color.white};
  `,
};

export { StyledButton };
