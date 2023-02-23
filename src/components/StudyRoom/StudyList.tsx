import React from "react";
import styled from "styled-components";
import StudyRoomItem from "./StudyRoomItem";

export interface RoomType {
  id: string;
  name: string;
  studyCategoryDto: {
    id: string;
    name: string;
    description: string;
  };
  maximumNumberOfPeople: number;
  studyGoalTime?: string;
  roomPassword?: string;
  masterUserId?: string;
  createdAt: string;
  updatedAt?: string;
}

interface ListProps {
  roomList: RoomType[];
}
const StudyList = (props: ListProps) => {
  const { roomList } = props;
  return (
    <ListUl>
      {roomList.map((item, idx) => (
        <StudyRoomItem roomItemData={item} key={item.id} />
      ))}
    </ListUl>
  );
};

export default StudyList;

const ListUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 31.25rem;
  transform: translateX(100px);

  .Room__Ready {
    transition: transform 0.5s;
    transform: translateX(-100px);
  }
  .Room__Default {
    transition: transform 0.5s;
    transform: translateX(0);
  }
`;
