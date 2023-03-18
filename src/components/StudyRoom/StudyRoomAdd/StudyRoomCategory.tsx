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
};
const StudyRoomCategory = (props: StudyRoomCategoryProps) => {
  const { name, wasSubmitted } = props;
  const [value, setValue] = useState("");
  const errorMessage = getFieldError(value);
  const [touched, setTouched] = React.useState(false);
  const displayErrorMessage = (wasSubmitted || touched) && errorMessage;

  const { status, data } = useStudyCategoryAllGet();

  return (
    <StudyRoomFormWrap key={name}>
      <LabelWrap>
        <StudyRoomFormLabel name={name} />
        <CategoryAdd />
      </LabelWrap>
      <StudyRoomFormItemSelect
        id={`${name}-input`}
        className="Study__Add__Input"
        placeholder={name}
        name={name}
        onChange={(e) => setValue(e.currentTarget.value)}
        onBlur={() => setTouched(true)}
        required
        araia-aria-describedby={
          displayErrorMessage ? `${name}-error` : undefined
        }
      >
        <option value="" selected disabled style={{ display: "none" }}>
          카테고리 선택
        </option>
        {status === "success" ? (
          data?.data.data.map((item, idx) => (
            <option key={item.id}>{item.name}</option>
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
    </StudyRoomFormWrap>
  );
};

const LabelWrap = ({ children }: PropsWithChildren) => {
  return <LabelWrapDiv>{children}</LabelWrapDiv>;
};
const CategoryAdd = () => {
  const setIsCategoryPopupOpen = useSetRecoilState(categoryAddPopupAtom);
  return (
    <CategoryAddButton onClick={() => setIsCategoryPopupOpen(true)}>
      새로 추가하기
    </CategoryAddButton>
  );
};

export default StudyRoomCategory;
const LabelWrapDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CategoryAddButton = styled.button`
  border-radius: 12px;
  border: solid 0.0625rem #eaeaea;
  background-color: ${COLOR.SUB};
  color: white;
  padding: 3px 7px;
`;
const StudyRoomFormItemSelect = styled.select`
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
  }
`;
