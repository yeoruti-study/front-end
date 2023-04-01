import React, { PropsWithChildren, useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import categoryAddPopupAtom from "../../../atoms/categoryAdd";
import { useStudyCategoryAllGet } from "../../../hooks/react_query_hooks/useStudyCategory";
import COLOR from "../../../style/color";
import getFieldError from "../../../utils/getFieldError";
import { StudyRoomFormLabel, StudyRoomFormWrap } from "./StudyRoomFormItem";
type StudyRoomCategoryProps = {
  // inputRef: React.MutableRefObject<HTMLInputElement>;
  name: string;
  wasSubmitted: boolean;
  formKey: string;
};
const StudyRoomCategory = (props: StudyRoomCategoryProps) => {
  const { name, wasSubmitted, formKey } = props;
  const [value, setValue] = useState("");
  const errorMessage = getFieldError(true, value);
  const [touched, setTouched] = React.useState(false);
  const displayErrorMessage = (wasSubmitted || touched) && errorMessage;

  const { status, data } = useStudyCategoryAllGet();

  return (
    <StudyRoomFormWrap key={name}>
      <LabelWrap>
        <StudyRoomFormLabel name={name} />
        <CategoryAdd />
      </LabelWrap>
      <StudyRoomSelectWrap>
        <StudyRoomFormItemSelect
          id={`${name}-input`}
          className="Study__Add__Input"
          placeholder={name}
          name={formKey}
          onChange={(e) => setValue(e.currentTarget.value)}
          onBlur={() => setTouched(true)}
          required
          araia-aria-describedby={
            displayErrorMessage ? `${name}-error` : undefined
          }
        >
          <option value="" style={{ display: "none" }}>
            카테고리 선택
          </option>
          {status === "success" ? (
            data?.data.data.map((item, idx) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))
          ) : (
            <></>
          )}
        </StudyRoomFormItemSelect>

        {displayErrorMessage ? (
          <span role="alert" id={`${name}-error`} className="Alert__Message">
            {errorMessage}
          </span>
        ) : null}
      </StudyRoomSelectWrap>
    </StudyRoomFormWrap>
  );
};

const LabelWrap = ({ children }: PropsWithChildren) => {
  return <LabelWrapDiv>{children}</LabelWrapDiv>;
};
const CategoryAdd = () => {
  const setIsCategoryPopupOpen = useSetRecoilState(categoryAddPopupAtom);
  return (
    <CategoryAddDiv onClick={() => setIsCategoryPopupOpen(true)}>
      새로 추가하기
    </CategoryAddDiv>
  );
};
const StudyRoomSelectWrap = ({ children }: PropsWithChildren) => {
  return (
    <StudyRoomSelectWrapDiv className="Study__Input__Wrap">
      {children}
    </StudyRoomSelectWrapDiv>
  );
};
export default StudyRoomCategory;
const LabelWrapDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CategoryAddDiv = styled.div`
  border-radius: 12px;
  border: solid 0.0625rem #eaeaea;
  background-color: green;
  color: white;
  padding: 5px 7px;
  font-size: 0.8rem;
  cursor: pointer;
`;
const StudyRoomFormItemSelect = styled.select`
  width: 100%;
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
  }
`;

const StudyRoomSelectWrapDiv = styled.div`
  position: relative;
  width: 100%;
`;
