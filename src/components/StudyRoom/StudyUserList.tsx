import React from "react";
import styled from "styled-components";
import { dummyData } from "../../containers/StudyRoom/StudyRoomDetail";
import { RoomUserType } from "../../api/roomUser/types/roomUserType";
type ModalUserListProps = {
  // TODO: 이후에 type 파일 만들어서 정리 필요
  userList: RoomUserType[];
};
const StudyUserList = (props: ModalUserListProps) => {
  const { userList } = props;
  return (
    <ListUl>
      {userList.map((item, idx) => {
        const { username, roles, profileImagePath } = item.userDto;
        return (
          <ListLi>
            {/* <img
              src={profileImagePath || ""}
              alt={`${username} 프로필 이미지`}
            /> */}
            <ProfileImg></ProfileImg>
            <div>
              <span>{username}</span>
              <span>{roles}</span>
            </div>
          </ListLi>
        );
      })}
    </ListUl>
  );
};

export default StudyUserList;

const ProfileImg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #fed049;
`;
const ListUl = styled.ul`
  display: flex;
  gap: 5px;
  flex-wrap: auto;
`;

const ListLi = styled.li`
  height: 100px;
  display: flex;
  gap: 30px;
  padding-right: 50px;
  align-items: center;
  overflow: hidden;
  border-radius: 100px;
  background-color: lightcoral;
`;
