import React, { PropsWithChildren, useRef, useState } from "react";
import styled from "styled-components";
import getFieldError from "../../../utils/getFieldError";

type StudyRoomFormItemProps = {
  // inputRef: React.MutableRefObject<HTMLInputElement>;
  name: string;
  type: string;
  step?: string;
  wasSubmitted: boolean;
  formKey: string;
  required: boolean;
};
const StudyRoomFormItem = (props: StudyRoomFormItemProps) => {
  const { name, wasSubmitted, type, step, formKey, required } = props;
  const [value, setValue] = useState("");
  const errorMessage = getFieldError(required, value);
  const [touched, setTouched] = React.useState(false);
  const displayErrorMessage = (wasSubmitted || touched) && errorMessage;
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLInputElement>(null);

  const togglePasswordVisibility = () => {
    setIsVisible((state) => !state);
    if (itemRef.current) {
      const type = itemRef.current.type;
      if (type === "text") {
        itemRef.current.type = "password";
      } else if (type === "password") {
        itemRef.current.type = "text";
      }
    }
  };
  return (
    <StudyRoomFormWrap key={name}>
      <StudyRoomFormLabel name={name} />
      <StudyRoomInputWrap>
        <StudyRoomFormItemInput
          ref={itemRef}
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
        {formKey === "roomPassword" &&
          !isVisible &&
          itemRef.current &&
          itemRef.current.value !== "" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
              onClick={togglePasswordVisibility}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          )}
        {formKey === "roomPassword" &&
          isVisible &&
          itemRef.current &&
          itemRef.current.value !== "" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
              onClick={togglePasswordVisibility}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          )}
        {displayErrorMessage ? (
          <span role="alert" id={`${name}-error`} className="Alert__Message">
            {errorMessage}
          </span>
        ) : null}
      </StudyRoomInputWrap>
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

const StudyRoomInputWrap = ({ children }: PropsWithChildren) => {
  return (
    <StudyRoomInputWrapDiv className="Study__Input__Wrap">
      {children}
    </StudyRoomInputWrapDiv>
  );
};
export default StudyRoomFormItem;

export const StudyRoomFormWrapDiv = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1.125rem;
  grid-auto-flow: row;
  grid-row-gap: 0.75rem;
  width: 100%;
  .Study__Input__Wrap {
    grid-column-start: 1;
    grid-column-end: 3;
    height: 3.125rem;
  }
`;

export const StudyRoomFormItemInput = styled.input`
  z-index: 100;
  width: 100%;
  height: 3.125rem;
  padding: 0.875rem;
  padding-right: ${(props) =>
    props.name === "roomPassword" ? "3.125rem" : "0.875rem"};
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

const StudyRoomInputWrapDiv = styled.div`
  position: relative;
  width: 100%;
  /* display: flex; */

  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    width: 20px;
    height: auto;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;
