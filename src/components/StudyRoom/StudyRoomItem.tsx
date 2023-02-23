import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RoomType } from "./StudyList";

interface RoomProps {
  roomItemData: RoomType;
}
export const getId = (id: string, type: string) => {
  return type + id;
};
const StudyRoomItem = (props: RoomProps) => {
  const [isReady, setIsReady] = useState(false);
  const roomRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const {
    id,
    name,
    studyCategoryDto,
    maximumNumberOfPeople,
    studyGoalTime,
    masterUserId,
    createdAt,
    updatedAt,
  } = props.roomItemData;

  return (
    <RoomWrap
      ref={roomRef}
      onMouseLeave={() => {
        if (roomRef.current) {
          setIsReady(false);
          roomRef.current.classList.replace("Room__Ready", "Room__Default");
        }
      }}
    >
      <RoomDiv
        id={getId(id, "room")}
        onClick={() => {
          if (roomRef.current) {
            if (
              !roomRef.current.classList.replace("Room__Default", "Room__Ready")
            ) {
              roomRef.current.classList.add("Room__Ready");
            }
          }
          setIsReady(true);
        }}
      >
        <span>{studyCategoryDto.name}</span>
        <h1>{name}</h1>
        <WrapDiv>
          <span>{studyGoalTime}</span>
          <span>{maximumNumberOfPeople}</span>
          <span>{masterUserId}</span>
        </WrapDiv>
      </RoomDiv>
      {
        <RegisterDiv
          isReady={isReady}
          onClick={() => {
            // TODO: study room detail 페이지로 이동
            navigate(`/studyroom/detail/${id}`);
          }}
        >
          가입하기
        </RegisterDiv>
      }
    </RoomWrap>
  );
};

export default StudyRoomItem;

const RoomWrap = styled.div`
  position: relative;
  display: flex;
`;
type RegisterDivProps = {
  isReady: boolean;
};
const RegisterDiv = styled.div<RegisterDivProps>`
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: #68b984;
  color: white;
  opacity: ${(props) => (props.isReady ? 1 : 0)};
  transition: all 0.5s;
  cursor: ${(props) => (props.isReady ? "pointer" : "default")};
`;
const WrapDiv = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.3125rem;
  width: 100%;
`;
const RoomDiv = styled.div`
  display: grid;
  grid-auto-flow: row;
  width: 25rem;
  height: 100px;
  padding: 0.3125rem;
  border-radius: 0.3125rem;
  background-color: #eaeaea;
  box-shadow: 0px 3px 8px -4px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 3px 8px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 3px 8px -4px rgba(0, 0, 0, 0.75);
`;
