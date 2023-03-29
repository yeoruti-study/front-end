import React, { PropsWithChildren, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import categoryAddPopupAtom from "../../atoms/categoryAdd";
import CategoryAddPopup from "../../components/StudyRoom/CategoryAddPopup/CategoryAddPopup";
import StudyRoomAdd from "../../components/StudyRoom/StudyRoomAdd/StudyRoomAdd";
import StudyRoomLayout from "../../components/StudyRoom/StudyRoomLayout";
import StudyRoomSearch from "../../components/StudyRoom/StudyRoomSearch/StudyRoomSearch";
import { useRoomUserStudyRoomGet } from "../../hooks/react_query_hooks/useRoomUser";
import { NavItemLi, NavUl } from "./MyStudyRoomContainer";

const StudyRoomContainer = () => {
  useRoomUserStudyRoomGet();
  const isCategoryAddPopupOpen = useRecoilValue(categoryAddPopupAtom);
  return (
    <StudyRoomContainerWrap>
      {isCategoryAddPopupOpen && <CategoryAddPopup />}
      <StudyRoomLayout Nav={StudyRoomNav} Main={StudyRoomMain} />
    </StudyRoomContainerWrap>
  );
};
const StudyNavData = [
  {
    type: "home",
    name: "홈",
    url: "/studyroom/home",
  },
  {
    type: "search",
    name: "스터디룸 조회",
    url: "/studyroom/search",
  },
  {
    type: "add",
    name: "스터디룸 생성",
    url: "/studyroom/add",
  },
  {
    type: "myStudyRoom",
    name: "MY 스터디룸",
    url: "/studyroom/my-studyroom/home",
  },
];
const StudyRoomContainerWrap = ({ children }: PropsWithChildren) => {
  return <StudyRoomContainerWrapDiv>{children}</StudyRoomContainerWrapDiv>;
};
const StudyRoomNav = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  return (
    <NavUl>
      {StudyNavData.map((item, idx) => (
        <NavItemLi
          key={`studyRoomNav-${item.name}`}
          onClick={() => navigate(item.url)}
          selected={item.type === String(type)}
        >
          {item.name}
        </NavItemLi>
      ))}
    </NavUl>
  );
};

const StudyRoomMain = () => {
  const { type } = useParams();

  switch (type) {
    case "search":
      return <StudyRoomSearch />;
    case "add":
      return <StudyRoomAdd />;
    default:
      return <></>;
  }
};
export default StudyRoomContainer;

const StudyRoomContainerWrapDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
