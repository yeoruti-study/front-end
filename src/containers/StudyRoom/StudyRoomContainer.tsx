import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import StudyRoomAdd from "../../components/StudyRoom/StudyRoomAdd";
import StudyRoomLayout from "../../components/StudyRoom/StudyRoomLayout";
import StudyRoomList from "../../components/StudyRoom/StudyRoomList";
import { NavUl } from "./MyStudyRoomContainer";

const StudyRoomContainer = () => {
  return <StudyRoomLayout Nav={StudyRoomNav} Main={StudyRoomMain} />;
};

const StudyRoomNav = () => {
  const navigate = useNavigate();
  return (
    <NavUl>
      <li onClick={() => navigate("/studyroom/search")}>스터디룸 조회</li>
      <li onClick={() => navigate("/studyroom/add")}>스터디룸 생성</li>
      <li onClick={() => navigate("/studyroom/my-studyroom")}>MY 스터디룸</li>
    </NavUl>
  );
};

const StudyRoomMain = () => {
  const { type } = useParams();

  switch (type) {
    case "search":
      return <StudyRoomList />;
    case "add":
      return <StudyRoomAdd />;
    default:
      return <></>;
  }
};
export default StudyRoomContainer;
