import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { StudyRoomType } from "../../api/studyRoom/types/studyRoomType";
import COLOR from "../../style/color";
import { useRecoilValue } from "recoil";
import { userIdSelector } from "../../atoms/userInfo";
import myStudyRoomSetAtom from "../../atoms/myStudyRoom";
interface RoomProps {
  roomItemData: StudyRoomType;
  onClick: (userId: string, studyRoomId: string) => void;
}
export const getId = (id: string, type: string) => {
  return type + id;
};
const StudyRoomItem = (props: RoomProps) => {
  const userId = useRecoilValue(userIdSelector);
  const myStudyRoomSet = useRecoilValue(myStudyRoomSetAtom);
  // const [isReady, setIsReady] = useState(false);
  // const roomRef = useRef<HTMLDivElement>(null);

  // TODO: onClick 함수 구현 (useRoomUser 사용)

  const {
    id,
    name,
    studyCategoryDto,
    maximumNumberOfPeople,
    studyGoalTime,
    roomPassword,
    masterUserId,
    createdAt,
    updatedAt,
    masterUserUsername,
    masterUserProfileName,
  } = props.roomItemData;
  const { onClick } = props;

  // TODO: isSigned 로직 수정

  const isSigned = masterUserId === userId || myStudyRoomSet.has(id);
  console.log(masterUserId, userId);

  const signupHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isSigned) return;
    onClick(userId, id);
  };
  return (
    <RoomWrap
    // ref={roomRef}
    // onMouseLeave={() => {
    //   if (roomRef.current) {
    //     setIsReady(false);
    //     roomRef.current.classList.replace("Room__Ready", "Room__Default");
    //   }
    // }}
    >
      <RoomDiv
      // id={getId(id, "room")}
      // onClick={() => {
      //   if (roomRef.current) {
      //     if (
      //       !roomRef.current.classList.replace("Room__Default", "Room__Ready")
      //     ) {
      //       roomRef.current.classList.add("Room__Ready");
      //     }
      //   }
      //   setIsReady(true);
      // }}
      >
        <WrapDiv>
          <InfoDiv>
            <TitleH1>{name}</TitleH1>
            <CategoryDiv>{studyCategoryDto.name}</CategoryDiv>
          </InfoDiv>

          <SignupButton isSigned={isSigned} onClick={signupHandler}>
            {isSigned ? "가입완료" : "가입하기"}
          </SignupButton>
        </WrapDiv>
        <Contour />
        <DetailDiv>
          <span className="Detail__Title">방장</span>
          <span>{masterUserProfileName}</span>
          <span className="Detail__Title">목표</span>
          <span>{studyGoalTime}</span>
          <span className="Detail__Title">인원</span>
          <span>{maximumNumberOfPeople}</span>
          <span className="Detail__Title">시작일</span>
          <span>{createdAt}</span>
        </DetailDiv>
      </RoomDiv>
      {/* {
        <RegisterDiv
          isReady={isReady}
          onClick={() => {
            // navigate(`/studyroom/detail/${id}`);
            // TODO: 가입 모달 open
          }}
        >
          가입하기
        </RegisterDiv>
      } */}
    </RoomWrap>
  );
};

const Contour = () => {
  return <ContourDiv></ContourDiv>;
};
export default StudyRoomItem;

const DetailDiv = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 4fr 6fr;
  justify-items: start;
  grid-row-gap: 10px;
  .Detail__Title {
    font-weight: 600;
    color: rgba(0, 0, 0, 0.2);
  }
`;
const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;
type SignupButtonProps = {
  isSigned: boolean;
};
const SignupButton = styled.button<SignupButtonProps>`
  border-radius: 20px;
  padding: 5px 8px;
  border: none;
  background-color: ${(props) => (props.isSigned ? "#0ca230" : COLOR.DARKMAIN)};
  color: #fff;
  font-weight: 600;
  pointer-events: ${(props) => props.isSigned && "none"};
`;

const TitleH1 = styled.h1`
  font-size: 1.2rem;
  font-weight: 600;
`;
const CategoryDiv = styled.div`
  border-radius: 20px;
  background-color: ${COLOR.MAIN};
  padding: 5px;
  color: #fff;
  font-size: 0.6rem;
  text-align: center;
  opacity: 0.8;
`;
const ContourDiv = styled.div`
  width: 100%;
  margin: 15px 0;
  border-bottom: solid 2px rgba(0, 0, 0, 0.1);
`;
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
  border-radius: 12px;
  /* display: grid;
  grid-auto-flow: row;
  grid-gap: 0.3125rem; */
  /* width: 100%; */
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: auto;
`;
const RoomDiv = styled.div`
  display: grid;
  grid-auto-flow: row;
  width: 25rem;
  height: auto;
  /* height: 100px; */
  padding: 1.25rem;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0px 3px 8px -4px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 3px 8px -4px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 3px 8px -4px rgba(0, 0, 0, 0.3);
`;
