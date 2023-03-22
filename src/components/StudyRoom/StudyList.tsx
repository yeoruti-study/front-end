// deprecated

import React from "react";
import styled from "styled-components";
import { StudyRoomType } from "../../api/studyRoom/types/studyRoomType";
import StudyRoomItem from "./StudyRoomItem";

interface ListProps {
  roomList: StudyRoomType[];
}
const StudyList = (props: ListProps) => {
  const { roomList } = props;
  return <ListUl></ListUl>;
};

export default StudyList;

const ListUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 31.25rem;
  /* transform: translateX(100px); */

  /* .Room__Ready {
    transition: transform 0.5s;
    transform: translateX(-100px);
  }
  .Room__Default {
    transition: transform 0.5s;
    transform: translateX(0);
  } */
`;
