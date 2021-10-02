import { forwardRef } from "react";
import PropTypes from "prop-types";

import {
  StyledInput,
  InputElement,
  ErrorContainer,
  InputWrapper,
} from "./styles";

const propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  isError: PropTypes.string,
  errorMsg: PropTypes.string,
  onChange: PropTypes.func,
};

const defaultProps = {
  className: undefined,
  name: undefined,
  value: undefined,
  label: undefined,
  isError: undefined,
  errorMsg: undefined,
  onChange: () => {},
};

const Input = forwardRef(
  (
    {
      className,
      label,
      name,
      isError,
      errorMsg,
      onChange,
      value,
      ...inputProps
    },
    ref
  ) => {
    return (
      <InputWrapper>
        {label && <label htmlFor={name}>{label} </label>}
        <StyledInput className={className}>
          <InputElement
            value={value}
            invalid={isError}
            name={name}
            ref={ref}
            onChange={onChange}
            {...inputProps}
          />
        </StyledInput>
        {errorMsg && <ErrorContainer>{errorMsg}</ErrorContainer>}
      </InputWrapper>
    );
  }
);

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
