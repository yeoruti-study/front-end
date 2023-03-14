import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import StudyRoomLayout from "../../components/StudyRoom/StudyRoomLayout";
import {
  useRoomUserAllGet,
  useRoomUserStudyRoomGet,
} from "../../hooks/react_query_hooks/useRoomUser";

const MyStudyRoomContainer = () => {
  return (
    <StudyRoomLayout
      Nav={MyStudyRoomNav}
      Main={MyStudyRoomMain}
      Member={MyStudyRoomMemberStatus}
      Dropdown={MyStudyRoomDropDown}
    />
  );
};

export const MyStudyRoomDropDown = () => {
  const { status, data } = useRoomUserStudyRoomGet();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const onDropdownClick = () => {
    if (!dropdownVisible) {
      setDropdownVisible(true);
    } else {
      setDropdownVisible(false);
    }
  };
  return dropdownVisible && status === "success" ? (
    <DropdownUl onClick={onDropdownClick}>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
      <li>item 4</li>
      {data?.data.data.map((item, idx) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </DropdownUl>
  ) : (
    <DropdownDiv onClick={onDropdownClick}></DropdownDiv>
  );
};
export const MyStudyRoomNav = () => {
  const navigate = useNavigate();
  return (
    <NavUl>
      <li onClick={() => navigate("/studyroom/my-studyroom/home")}>홈</li>
      <li onClick={() => navigate("/studyroom/my-studyroom/attendance")}>
        출석부
      </li>
      <li onClick={() => navigate("/studyroom/my-studyroom/rank")}>랭킹</li>
      <li onClick={() => navigate("/studyroom/my-studyroom/chat")}>채팅</li>
      <li onClick={() => navigate("/studyroom/my-studyroom/invite")}>초대</li>
      <li onClick={() => navigate("/studyroom/my-studyroom/settings")}>설정</li>
    </NavUl>
  );
};

export const MyStudyRoomMemberStatus = () => {
  return (
    <MemberUl>
      <MyStudyRoomMemberItem name={"최용재"} />
      <MyStudyRoomMemberItem name={"하정수"} />
      <MyStudyRoomMemberItem name={"정채은"} />
      <MyStudyRoomMemberItem name={"이채민"} />
    </MemberUl>
  );
};
type MemberItemProps = {
  name: string;
};
const MyStudyRoomMemberItem = (props: MemberItemProps) => {
  return (
    <MemberLi>
      <div>{props.name}</div>
      <div className="Member__Item__Status"></div>
    </MemberLi>
  );
};

export const MyStudyRoomMain = () => {
  return <></>;
};
export default MyStudyRoomContainer;

const DropdownUl = styled.ul`
  border: 1px solid black;
  border-radius: 4px;
  width: 100%;
  li {
    width: 100%;
    height: 40px;
    padding: 3px 0;
    border: 0.5px solid black;
  }
`;
const DropdownDiv = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  width: 100%;
  height: 40px;
`;

export const NavUl = styled.ul`
  border-radius: 4px;

  li {
    width: 100%;
    height: 40px;
    padding: 3px 0;
  }
`;

const MemberUl = styled.ul`
  border-radius: 4px;

  li {
    width: 100%;
    height: 40px;
    padding: 3px 0;
  }
`;
const MemberLi = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  .Member__Item__Status {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: green;
  }
`;
