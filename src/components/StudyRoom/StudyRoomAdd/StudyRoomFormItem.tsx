import React, { PropsWithChildren, useState } from "react";
import styled from "styled-components";
import getFieldError from "../../../utils/getFieldError";

type StudyRoomFormItemProps = {
  // inputRef: React.MutableRefObject<HTMLInputElement>;
  name: string;
  type: string;
  step?: string;
  wasSubmitted: boolean;
  formKey: string;
};
const StudyRoomFormItem = (props: StudyRoomFormItemProps) => {
  const { name, wasSubmitted, type, step, formKey } = props;
  const [value, setValue] = useState("");
  const errorMessage = getFieldError(value);
  const [touched, setTouched] = React.useState(false);
  const displayErrorMessage = (wasSubmitted || touched) && errorMessage;

  return (
    <StudyRoomFormWrap key={name}>
      <StudyRoomFormLabel name={name} />
      <StudyRoomFormItemInput
        id={`${name}-input`}
        className="Study__Add__Input"
        placeholder={name}
        step={step ? step : "1"}
        name={formKey}
        type={type}
        onChange={(e) => setValue(e.currentTarget.value)}
        value={value}
        onBlur={() => setTouched(true)}
        required
        araia-aria-describedby={
          displayErrorMessage ? `${name}-error` : undefined
        }
      />
      {displayErrorMessage ? (
        <span role="alert" id={`${name}-error`} className="Alert__Message">
          {errorMessage}
        </span>
      ) : null}
    </StudyRoomFormWrap>
  );
};

export const StudyRoomFormWrap = ({ children }: PropsWithChildren) => {
  return <StudyRoomFormWrapDiv>{children}</StudyRoomFormWrapDiv>;
};

type StudyRoomFormLabelProps = {
  name: string;
};
export const StudyRoomFormLabel = React.memo(
  (props: StudyRoomFormLabelProps) => {
    const { name } = props;
    return (
      <StudyRoomFormLabelBox
        htmlFor={`${name}-input`}
        className="Study__Add__Label"
      >
        {name}
      </StudyRoomFormLabelBox>
    );
  }
);
export default StudyRoomFormItem;

export const StudyRoomFormWrapDiv = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1.125rem;
  grid-auto-flow: row;
  grid-row-gap: 0.75rem;

  .Study__Add__Input {
    grid-column-start: 1;
    grid-column-end: 3;
    height: 3.125rem;
  }
`;

export const StudyRoomFormItemInput = styled.input`
  max-width: 19.375rem;
  height: 3.125rem;
  padding: 0.875rem 1.25rem;
  border-radius: 12px;
  border: solid 0.0625rem #eaeaea;
  background-color: #fff;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5rem;
  letter-spacing: -0.05rem;
  text-align: left;
  color: #202020;
  ::placeholder {
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5rem;
    letter-spacing: -0.05rem;
    text-align: left;
    color: #9e9e9e;
  }
  :focus {
    border-color: #202020;
    ::placeholder {
      color: #202020;
    }
  }
`;
export const StudyRoomFormLabelBox = styled.label`
  height: 1.8125rem;
  font-size: 1.25rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8125rem;
  letter-spacing: -0.0625rem;
  text-align: left;
  color: #202020;
  .Label__Star {
    font-size: 1.375rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.0688rem;
    text-align: left;
    color: #ac1313;
  }
`;
