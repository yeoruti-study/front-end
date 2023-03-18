import React, { PropsWithChildren, useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import categoryAddPopupAtom from "../../../atoms/categoryAdd";
import { useStudyCategoryPost } from "../../../hooks/react_query_hooks/useStudyCategory";
import getFieldError from "../../../utils/getFieldError";
import localConsole from "../../../utils/localConsole";
import {
  StudyRoomFormButton,
  StudyRoomSubmitWrap,
} from "../StudyRoomAdd/StudyRoomAdd";
import StudyRoomFormItem from "../StudyRoomAdd/StudyRoomFormItem";

const CategoryAddPopup = () => {
  return (
    <CategoryAddWrap>
      <CategoryAddBackground />
      <CategoryAddForm />
    </CategoryAddWrap>
  );
};

const CategoryAddWrap = ({ children }: PropsWithChildren) => {
  return <CategoryAddWrapDiv>{children}</CategoryAddWrapDiv>;
};
const CategoryAddFormData = [
  { name: "카테고리 이름", type: "text", key: "name" },

  { name: "카테고리 설명", type: "text", key: "description" },
];
const CategoryAddForm = () => {
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const onSubmit = useStudyCategoryPost();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fieldValues = Object.fromEntries(formData.entries());
    localConsole?.log(fieldValues);
    localConsole?.log(formData.entries());
    const formIsValid = Object.values(fieldValues).every(
      (value) => !getFieldError(value as string)
    );

    setWasSubmitted(true);
    if (formIsValid) {
      // TODO: API 연결
      onSubmit(
        (String(fieldValues["name"]), String(fieldValues["description"]))
      );
      localConsole?.log("form submitted", fieldValues);
    }
  }
  return (
    <CategoryAddFormBox noValidate onSubmit={handleSubmit}>
      {CategoryAddFormData.map((category, idx) => (
        <StudyRoomFormItem
          key={`categoryAdd-${category.key}`}
          name={category.name}
          type={category.type}
          formKey={category.key}
          wasSubmitted={wasSubmitted}
        />
      ))}
      <StudyRoomSubmitWrap>
        <StudyRoomFormButton>추가하기</StudyRoomFormButton>
      </StudyRoomSubmitWrap>
    </CategoryAddFormBox>
  );
};
const CategoryAddBackground = () => {
  const setIsPopupOpen = useSetRecoilState(categoryAddPopupAtom);

  return (
    <PopupBackgroundDiv
      onClick={() => setIsPopupOpen(false)}
    ></PopupBackgroundDiv>
  );
};
export default CategoryAddPopup;

const CategoryAddWrapDiv = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
`;
const CategoryAddPopupDiv = styled.div`
  width: 500px;
  height: 500px;
  padding: 20px;
  border-radius: 30px;
  box-shadow: 0.5px 3px 20px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const PopupBackgroundDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
const CategoryAddFormBox = styled.form`
  z-index: 800;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 30px;
  box-shadow: 0.5px 3px 20px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;
