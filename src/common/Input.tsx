import React, { ForwardedRef, MouseEventHandler} from "react";
import styled from "styled-components";
import COLOR from "../style/color";

interface InputP extends React.ComponentPropsWithoutRef<'input'>{
  onReset?: () => void
  adPadding?: () => void
  onClick?: MouseEventHandler
  width?: string
} 

const Input = ((props: InputP, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <InputWrapper width={props.width?props.width:'auto'}>
      <InputBox ref={ref} {...props} />
      {props.onReset && <RemoveIcon onClick={props.onReset}>&times;</RemoveIcon>}
    </InputWrapper>
  );
})

export default React.forwardRef(Input);

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

const InputBox = styled.input<InputP>`
  display: inline-block;
  width: 100%;
  border: 0;
  padding: 0;
  ${({ adPadding }) => adPadding && `padding-right: 0.6rem`};
  font-size: 1rem;
`;

const RemoveIcon = styled.span<{onClick: React.MouseEventHandler}>`
  display: inline-block;
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;
