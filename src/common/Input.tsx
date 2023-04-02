import { RefObject, InputHTMLAttributes } from "react";
import styled from "styled-components";
import COLOR from "../style/color";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  width?: string;
  onReset?: () => void;
  inputRef?: RefObject<HTMLInputElement>;
} ;

const Input = ({ width = "auto", onReset, inputRef, ...res }: InputProps) => {
  return (
    <InputWrapper width={width}>
      <InputBox ref={inputRef} {...res} adPadding={onReset ? true: false} />
      {onReset && <RemoveIcon onClick={onReset}>&times;</RemoveIcon>}
    </InputWrapper>
  );
};

export default Input;

const InputWrapper = styled.div<{width: string}>`
  display: block;
  position: relative;
  ${({ width }) => (width ? `width: ${width}` : null)};
  padding: 8px 16px;
  border: 2px solid ${COLOR.MAIN};
  border-radius: 5px;
  transition: all 0.2s;
  &:focus-within {
    box-shadow: 0 0 8px ${COLOR.SUB};
  }
`;

const InputBox = styled.input<{adPadding: boolean}>`
  display: inline-block;
  width: 100%;
  border: 0;
  padding: 0;
  ${({ adPadding }) => adPadding && `padding-right: 0.6rem`};
  font-size: 1rem;
`;

const RemoveIcon = styled.span`
  display: inline-block;
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;
