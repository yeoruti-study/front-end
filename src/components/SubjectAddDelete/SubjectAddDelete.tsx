import React, { PropsWithChildren, useState } from "react";
import styled from "styled-components";
import {
  useUserStudySubjectDelete,
  useUserStudySubjectPost,
  useUserStudySubjectListGet,
} from "../../hooks/react_query_hooks/useStudySubject";
import COLOR from "../../style/color";
import getFieldError from "../../utils/getFieldError";
import localConsole from "../../utils/localConsole";
import StudyRoomFormItem from "../StudyRoom/StudyRoomAdd/StudyRoomFormItem";

const SubjectAddDelete = () => {
  const [isAdd, setIsAdd] = useState(true);
  return (
    <SubjectAddDelWrap>
      <SubjectTabDiv>
        <SubjectTabItemDiv isActive={isAdd} onClick={() => setIsAdd(true)}>
          과목 추가
        </SubjectTabItemDiv>
        <SubjectTabItemDiv isActive={!isAdd} onClick={() => setIsAdd(false)}>
          과목 삭제
        </SubjectTabItemDiv>
      </SubjectTabDiv>
      {isAdd ? <SubjectAddForm /> : <SubjectDelete />}
    </SubjectAddDelWrap>
  );
};

const SubjectAddFormData = [
  {
    name: "과목 이름",
    type: "text",
    key: "title",
  },
];
const SubjectDelete = () => {
  const onDelete = useUserStudySubjectDelete();
  const handleSubmit = () => {
    if (targetSubject) {
      onDelete(targetSubject);
      setTargetSubject("");
    }
  };
  const { status, data } = useUserStudySubjectListGet();
  const [targetSubject, setTargetSubject] = useState<string>("");

  return (
    <SubjectDelBox>
      <SubjectDeleteSelect
        onChange={(e) => {
          e.preventDefault();
          localConsole?.log(e.target.value);
          setTargetSubject(e.target.value);
        }}
      >
        <option value="" style={{ display: "none" }}>
          삭제 과목 선택
        </option>
        {data?.data.data.map((item, idx) => (
          <option value={item.id} key={item.id}>
            {item.title}
          </option>
        ))}
      </SubjectDeleteSelect>
      <SubjectDeleteButton onDelete={handleSubmit} />
    </SubjectDelBox>
  );
};

type SubjectDeleteButtonProps = {
  onDelete: () => void;
};
const SubjectDeleteButton = ({ onDelete }: SubjectDeleteButtonProps) => {
  return (
    <SubjectAddFormButton onClick={onDelete}>삭제하기</SubjectAddFormButton>
  );
};
const SubjectAddForm = () => {
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const onSubmit = useUserStudySubjectPost();

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
      onSubmit(String(fieldValues["title"]));
      localConsole?.log("form submitted", fieldValues);
    }
  }

  return (
    <SubjectAddFormBox noValidate onSubmit={handleSubmit}>
      {SubjectAddFormData.map((item, idx) => (
        <StudyRoomFormItem
          key={`subjectAdd-${item.key}`}
          name={item.name}
          type={item.type}
          formKey={item.key}
          wasSubmitted={wasSubmitted}
          required={true}
        />
      ))}
      <SubjectAddButton />
    </SubjectAddFormBox>
  );
};
const SubjectAddDelWrap = ({ children }: PropsWithChildren) => {
  return (
    <SubjectAddDelWrapDiv className="Subject__Add__Div">
      {children}
    </SubjectAddDelWrapDiv>
  );
};
const SubjectAddButton = () => {
  return <SubjectAddFormButton>추가하기</SubjectAddFormButton>;
};
export default SubjectAddDelete;

const SubjectAddDelWrapDiv = styled.div`
  /* padding: 20px; */
  width: 100%;
  height: 100%;
  /* width: 40%; */
  padding: 20px;
  border-radius: 30px;
  box-shadow: 0.5px 3px 20px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const SubjectAddFormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  width: 100%;
  padding-top: 10px;
  .Alert__Message {
    color: #c60404 !important;
    font-size: 0.8rem;
  }
`;
const SubjectAddFormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.625rem 3.375rem;
  border-radius: 12px;
  border: none;
  box-shadow: 0 0.0625rem 0.25rem 0 rgba(0, 0, 0, 0.16);
  background-color: ${COLOR.MAIN};

  font-size: 1.25rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;

  color: #fff;
`;

const SubjectDeleteSelect = styled.select`
  margin-top: 41px;
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
const SubjectTabDiv = styled.div`
  display: flex;
  align-items: center;
`;
type SubjectTabItemDivProps = {
  isActive: boolean;
};
const SubjectTabItemDiv = styled.div<SubjectTabItemDivProps>`
  width: 100%;
  padding: 10px;
  text-align: center;
  border-bottom: ${(props) =>
    props.isActive ? `3px solid ${COLOR.MAIN}` : "none"};
`;

const SubjectDelBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  width: 100%;
  padding-top: 10px;
`;
