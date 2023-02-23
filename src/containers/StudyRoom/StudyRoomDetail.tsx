import React, { PropsWithChildren, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { navItemData } from "../../components/StudyRoom/StudyRoomDetail/data";
import StudyUserList from "../../components/StudyRoom/StudyUserList";

export const dummyData = [
  {
    id: "94c02549-8b93-4403-8371-6e6e7d5fd07d",
    userDto: {
      id: "3cfd73fe-e6fa-4a21-9a3a-dd1ba7689431",
      username: "채",
      roles: "ㅇㄹ",
      profileName: null,
      profileBirth: null,
      profileImagePath: null,
      alarmPermission: false,
      friendAcceptance: false,
    },
    studyRoomDto: {
      id: "711268c8-373b-406a-a42e-6376593a252a",
      name: "스터디룸1",
      studyCategoryDto: {
        id: "22acdcc3-0282-4031-b2f3-d14aaa1ce0c3",
        name: "스터디카테고리1",
        description: "스터디카테고리1의 설명 수정",
      },
      maximumNumberOfPeople: 3,
      studyGoalTime: "PT3H",
      roomPassword: null,
      masterUserId: "3cfd73fe-e6fa-4a21-9a3a-dd1ba7689431",
      createdAt: "2023-02-09T20:45:27",
      updatedAt: null,
    },
  },
];

const StudyRoomDetail = () => {
  const { rid } = useParams();
  useEffect(() => {
    // TODO: rid 값으로 studyroom 정보 가져옴
  }, [rid]);
  return (
    <>
      <StudyDetailWrap>
        <StudyDetailHeader>
          <h1>{"스터디룸 상세 페이지"}</h1>
        </StudyDetailHeader>
        <StudyDetailBody>
          <StudyDetailNav>
            <NavList />
          </StudyDetailNav>
          <StudyUserList userList={dummyData} />
        </StudyDetailBody>
      </StudyDetailWrap>
    </>
  );
};

const NavList = () => {
  return (
    <NavListUl>
      {navItemData.map((item, idx) => (
        <NavItem
          title={item.title}
          src={item.iconSrc}
          key={`${item.title}${idx}`}
        />
      ))}
    </NavListUl>
  );
};

interface NavItemProps {
  title: string;
  src: string;
}
const NavItem = (props: NavItemProps) => {
  const { title, src } = props;
  return (
    <NavListLi>
      <NavImg src={src} alt={`${title}(으)로 이동`} />
      <NavSpan>{title}</NavSpan>
    </NavListLi>
  );
};
const StudyDetailNav = ({ children }: PropsWithChildren) => {
  return <NavWrap>{children}</NavWrap>;
};
const NavWrap = ({ children }: PropsWithChildren) => {
  return <NavWrapDiv>{children}</NavWrapDiv>;
};
const StudyDetailWrap = ({ children }: PropsWithChildren) => {
  return <StudyDetailWrapDiv>{children}</StudyDetailWrapDiv>;
};
const StudyDetailHeader = ({ children }: PropsWithChildren) => {
  return <StudyDetailHeaderDiv>{children}</StudyDetailHeaderDiv>;
};
const StudyDetailBody = ({ children }: PropsWithChildren) => {
  return <StudyDetailBodyDiv>{children}</StudyDetailBodyDiv>;
};
export default StudyRoomDetail;
const StudyDetailBodyDiv = styled.div`
  position: relative;
  width: 50%;
  height: 800px;
  box-shadow: 0.5px 3px 20px 0 rgba(0, 0, 0, 0.1);
`;
const StudyDetailHeaderDiv = styled.div``;
const StudyDetailWrapDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const NavWrapDiv = styled.div`
  position: absolute;
  left: -180px;
  padding: 1.25rem 1.875rem;
  border-radius: 10px;
  box-shadow: 0.5px 3px 20px 0 rgba(0, 0, 0, 0.1);
`;
const NavListUl = styled.ul`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 25px;
`;
const NavListLi = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const NavImg = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;
const NavSpan = styled.span`
  font-weight: 500;
  text-align: center;
`;
