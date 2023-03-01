import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import StudyList, { RoomType } from "../../components/StudyRoom/StudyList";
import StudyModal from "../../components/StudyRoom/StudyModal/StudyModal";
import { useStudyRoomAllGet } from "../../hooks/react_query_hooks/useStudyRoom";
const roomListDummy: RoomType[] = [
  {
    id: "25e1d2ea-4063-4be5-ba28-ad7c226df2f5",
    name: "스터디 룸1",
    studyCategoryDto: {
      id: "22acdcc3-0282-4031-b2f3-d14aaa1ce0c3",
      name: "스터디카테고리1",
      description: "스터디카테고리1의 설명 수정",
    },
    maximumNumberOfPeople: 3,
    studyGoalTime: "",
    roomPassword: "",
    masterUserId: "",
    createdAt: "2023-01-10T21:11:34",
    updatedAt: "2023-02-11T16:03:31",
  },
  {
    id: "f59cf358-5561-42a4-b2da-8e9ac730b346",
    name: "스터디 룸3",
    studyCategoryDto: {
      id: "1651291b-83ef-40eb-8b24-0b7c5d7250ab",
      name: "카테고리",
      description: "카테고리 설명",
    },
    maximumNumberOfPeople: 2,
    studyGoalTime: undefined,
    roomPassword: undefined,
    masterUserId: undefined,
    createdAt: "2023-01-10T21:20:48",
    updatedAt: undefined,
  },
  {
    id: "eeaa932b-1f91-4d50-ac21-0521cdf4deea",
    name: "스터디룸123123",
    studyCategoryDto: {
      id: "22acdcc3-0282-4031-b2f3-d14aaa1ce0c3",
      name: "스터디카테고리1",
      description: "스터디카테고리1의 설명 수정",
    },
    maximumNumberOfPeople: 3,
    studyGoalTime: "PT3H",
    roomPassword: undefined,
    masterUserId: "3cfd73fe-e6fa-4a21-9a3a-dd1ba7689431",
    createdAt: "2023-02-11T11:22:08",
    updatedAt: undefined,
  },
  {
    id: "8b9b8400-4c72-4163-abb5-6a3b2837b2d4",
    name: "스터디룸123123",
    studyCategoryDto: {
      id: "22acdcc3-0282-4031-b2f3-d14aaa1ce0c3",
      name: "스터디카테고리1",
      description: "스터디카테고리1의 설명 수정",
    },
    maximumNumberOfPeople: 0,
    studyGoalTime: "PT3H",
    roomPassword: undefined,
    masterUserId: "3cfd73fe-e6fa-4a21-9a3a-dd1ba7689431",
    createdAt: "2023-02-11T11:42:57",
    updatedAt: undefined,
  },
  {
    id: "5b40299b-ea36-4da1-8cf4-702ac59ab712",
    name: "스터디룸123123",
    studyCategoryDto: {
      id: "22acdcc3-0282-4031-b2f3-d14aaa1ce0c3",
      name: "스터디카테고리1",
      description: "스터디카테고리1의 설명 수정",
    },
    maximumNumberOfPeople: 0,
    studyGoalTime: "PT3H",
    roomPassword: undefined,
    masterUserId: "3cfd73fe-e6fa-4a21-9a3a-dd1ba7689431",
    createdAt: "2023-02-11T11:44:02",
    updatedAt: undefined,
  },
  {
    id: "e99efa3b-1270-4a4b-8291-364de3fc06c7",
    name: "스터디룸123123",
    studyCategoryDto: {
      id: "22acdcc3-0282-4031-b2f3-d14aaa1ce0c3",
      name: "스터디카테고리1",
      description: "스터디카테고리1의 설명 수정",
    },
    maximumNumberOfPeople: 30,
    studyGoalTime: "PT3H",
    roomPassword: undefined,
    masterUserId: "3cfd73fe-e6fa-4a21-9a3a-dd1ba7689431",
    createdAt: "2023-02-11T11:45:41",
    updatedAt: undefined,
  },
  {
    id: "7f3aed24-5b30-468e-84d2-e1e1e622e29f",
    name: "스터디룸123123123444",
    studyCategoryDto: {
      id: "22acdcc3-0282-4031-b2f3-d14aaa1ce0c3",
      name: "스터디카테고리1",
      description: "스터디카테고리1의 설명 수정",
    },
    maximumNumberOfPeople: 30,
    studyGoalTime: "PT3H",
    roomPassword: undefined,
    masterUserId: "3cfd73fe-e6fa-4a21-9a3a-dd1ba7689431",
    createdAt: "2023-02-11T14:04:07",
    updatedAt: undefined,
  },
  {
    id: "711268c8-373b-406a-a42e-6376593a252a",
    name: "스터디룸1",
    studyCategoryDto: {
      id: "22acdcc3-0282-4031-b2f3-d14aaa1ce0c3",
      name: "스터디카테고리1",
      description: "스터디카테고리1의 설명 수정",
    },
    maximumNumberOfPeople: 3,
    studyGoalTime: "PT3H",
    roomPassword: undefined,
    masterUserId: "3cfd73fe-e6fa-4a21-9a3a-dd1ba7689431",
    createdAt: "2023-02-09T20:45:27",
    updatedAt: undefined,
  },
];
const StudyHome = () => {
  const { status, data } = useStudyRoomAllGet();
  return (
    <>
      {/* <StudyModal /> */}
      <StudyWrap>
        <StudyHeader>
          <h1>스터디 룸</h1>
        </StudyHeader>
        <StudyBody>
          {status === "success" && data && (
            <StudyList roomList={data.data.data} />
          )}
        </StudyBody>
      </StudyWrap>
    </>
  );
};

const StudyWrap = ({ children }: PropsWithChildren) => {
  return <StudyWrapDiv>{children}</StudyWrapDiv>;
};
const HeaderWrap = ({ children }: PropsWithChildren) => {
  return <HeaderWrapDiv>{children}</HeaderWrapDiv>;
};
const StudyHeader = ({ children }: PropsWithChildren) => {
  return <HeaderWrap>{children}</HeaderWrap>;
};
const BodyWrap = ({ children }: PropsWithChildren) => {
  return <BodyWrapDiv>{children}</BodyWrapDiv>;
};
const StudyBody = ({ children }: PropsWithChildren) => {
  return <BodyWrap>{children}</BodyWrap>;
};

const BodyWrapDiv = styled.div``;
const StudyWrapDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const HeaderWrapDiv = styled.div`
  padding-bottom: 4.375rem;
`;
export default StudyHome;
