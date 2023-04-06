import React, { PropsWithChildren, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import curStudyRoomAtom, {
  curStudyRoomIdSelector,
} from "../../../atoms/curStudyRoom";
import studyPwPopupAtom from "../../../atoms/studyPwPopup";
import { useStudyRoomPwCheckPost } from "../../../hooks/react_query_hooks/useStudyRoom";
import getFieldError from "../../../utils/getFieldError";
import localConsole from "../../../utils/localConsole";
import {
  StudyRoomFormButton,
  StudyRoomSubmitWrap,
} from "../StudyRoomAdd/StudyRoomAdd";
import StudyRoomFormItem from "../StudyRoomAdd/StudyRoomFormItem";

const PasswordPopup = () => {
  return (
    <PasswordPopupWrap>
      <PasswordPopupBackground />
      <PasswordPopupForm />
    </PasswordPopupWrap>
  );
};

const PasswordPopupWrap = ({ children }: PropsWithChildren) => {
  return <PasswordPopupWrapDiv>{children}</PasswordPopupWrapDiv>;
};

const PasswordPopupBackground = () => {
  const setIsPopupOpen = useSetRecoilState(studyPwPopupAtom);
  return <PopupBackgroundDiv></PopupBackgroundDiv>;
};

const PasswordPopupForm = () => {
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const { onSubmit, setStudyPwPopup } = useStudyRoomPwCheckPost();
  const studyRoomId = useRecoilValue(curStudyRoomIdSelector);
  const setCurStudyRoom = useSetRecoilState(curStudyRoomAtom);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fieldValues = Object.fromEntries(formData.entries());
    localConsole?.log(fieldValues);
    localConsole?.log(formData.entries());
    const formIsValid = Object.values(fieldValues).every(
      (value) => !getFieldError(true, value as string)
    );

    setWasSubmitted(true);
    if (formIsValid) {
      // TODO: API 연결
      localConsole?.log(String(fieldValues["roomPassword"]));
      onSubmit(studyRoomId, String(fieldValues["roomPassword"]));
      localConsole?.log("form submitted", fieldValues);
    }
  }
  return (
    <PasswordPopupFormBox noValidate onSubmit={handleSubmit}>
      <BackButton
        onClick={() => {
          setCurStudyRoom({
            id: "",
            name: "",
            studyCategoryDto: {
              id: "",
              name: "",
              description: "",
            },
            maximumNumberOfPeople: 0,
            studyGoalTime: "",
            hasRoomPassword: false,
            masterUserId: "",
            createdAt: "",
            updatedAt: "",
            masterUserUsername: "",
            masterUserProfileName: "",
          });
          setStudyPwPopup(false);
          sessionStorage.removeItem("my_study_room");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="rgba(0,0,0,0.2)"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </BackButton>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="rgba(0,0,0,0.5)"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
          clipRule="evenodd"
        />
      </svg>

      <StudyRoomFormItem
        key={`studyRoomPassword-${studyRoomId}`}
        name={"비밀번호"}
        type={"password"}
        formKey={"roomPassword"}
        wasSubmitted={wasSubmitted}
        required={true}
      />
      <StudyRoomSubmitWrap>
        <StudyRoomFormButton>확인</StudyRoomFormButton>
      </StudyRoomSubmitWrap>
    </PasswordPopupFormBox>
  );
};
export default PasswordPopup;

const PasswordPopupWrapDiv = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

const PopupBackgroundDiv = styled.div`
  z-index: 900;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const PasswordPopupFormBox = styled.form`
  z-index: 910;
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 400px;

  padding: 20px;
  border-radius: 30px;
  box-shadow: 0.5px 3px 20px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transform: translate(-50%, -50%);

  svg {
    width: 50px;
    height: auto;
  }
  .Alert__Message {
    color: #c60404 !important;
    font-size: 0.8rem;
  }
`;
const BackButton = styled.div`
  cursor: pointer;
  position: absolute;
  left: 10px;
  top: 20px;
  svg {
    height: 40px;
    width: auto;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;
