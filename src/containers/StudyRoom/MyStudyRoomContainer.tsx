import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import curStudyRoomAtom from "../../atoms/curStudyRoom";
import studyPwPopupAtom from "../../atoms/studyPwPopup";
import PasswordPopup from "../../components/StudyRoom/StudyPasswordPopup/PasswordPopup";
import StudyRoomLayout from "../../components/StudyRoom/StudyRoomLayout";
import {
  useRoomUserAllGet,
  useRoomUserStudyRoomGet,
} from "../../hooks/react_query_hooks/useRoomUser";
import COLOR from "../../style/color";
const MyStudyRoomContainer = () => {
  const [curStudyRoom, setCurStudyRoom] = useRecoilState(curStudyRoomAtom);

  const [studyPwPopup, setStudyPwPopup] = useRecoilState(studyPwPopupAtom);
  useEffect(() => {
    const curStudyRoomSession = sessionStorage.getItem("my_study_room");
    if (curStudyRoomSession) {
      setCurStudyRoom({ ...JSON.parse(curStudyRoomSession) });
    }
  }, []);
  useEffect(() => {
    if (curStudyRoom.hasRoomPassword) {
      setStudyPwPopup(true);
    }
  }, [curStudyRoom]);
  return (
    <StudyRoomContainerWrap>
      {studyPwPopup && <PasswordPopup />}
      <StudyRoomLayout
        Nav={MyStudyRoomNav}
        Main={MyStudyRoomMain}
        Member={MyStudyRoomMemberStatus}
        Dropdown={MyStudyRoomDropDown}
      />
    </StudyRoomContainerWrap>
  );
};

const StudyRoomContainerWrap = ({ children }: PropsWithChildren) => {
  return <StudyRoomContainerWrapDiv>{children}</StudyRoomContainerWrapDiv>;
};
export const MyStudyRoomDropDown = () => {
  const { status, data } = useRoomUserStudyRoomGet();
  const [curStudyRoom, setCurStudyRoom] = useRecoilState(curStudyRoomAtom);

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownAni, setDropdownAni] = useState(false);
  const repeatRef = useRef<NodeJS.Timeout | null>(null);
  const onDropdownClick = () => {
    setDropdownVisible((state) => !state);
  };

  useEffect(() => {
    if (dropdownVisible) {
      clearTimeout(repeatRef.current || undefined);
      repeatRef.current = null;
      setDropdownAni(true);
    } else {
      repeatRef.current = setTimeout(() => setDropdownAni(false), 400);
    }
  }, [dropdownVisible]);

  return dropdownAni && status === "success" && data!.data.data.length > 0 ? (
    <article
      style={{ overflow: "hidden", borderRadius: "10px", position: "relative" }}
    >
      <DropdownUl
        onClick={onDropdownClick}
        className={
          dropdownVisible ? "Dropdown__Slide__In" : "Dropdown__Slide__Out"
        }
      >
        {data?.data.data.map((item, idx) => {
          return (
            <li
              key={item.id}
              onClick={() => {
                sessionStorage.setItem("my_study_room", JSON.stringify(item));
                setCurStudyRoom({ ...item });
              }}
            >
              {item.name}
            </li>
          );
        })}
      </DropdownUl>
    </article>
  ) : (
    <DropdownDiv onClick={onDropdownClick}>
      <span>
        {curStudyRoom.id === "" ? "스터디룸 선택" : curStudyRoom.name}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 Dropdown__Chevron__Down"
      >
        <path
          fillRule="evenodd"
          d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
          clipRule="evenodd"
        />
      </svg>
    </DropdownDiv>
  );
};
const MyNavData = [
  {
    type: "home",
    name: "홈",
    url: "/studyroom/my-studyroom/home",
  },
  {
    type: "attendance",
    name: "출석부",
    url: "/studyroom/my-studyroom/attendance",
  },
  {
    type: "rank",
    name: "랭킹",
    url: "/studyroom/my-studyroom/rank",
  },
  {
    type: "chat",
    name: "채팅",
    url: "/studyroom/my-studyroom/chat",
  },
  {
    type: "invite",
    name: "초대",
    url: "/studyroom/my-studyroom/invite",
  },
  {
    type: "settings",
    name: "설정",
    url: "/studyroom/my-studyroom/settings",
  },
];
export const MyStudyRoomNav = () => {
  const { id } = useRecoilValue(curStudyRoomAtom);
  const navigate = useNavigate();
  const { type } = useParams();
  const clickHandler = (url: string) => {
    if (id === "") {
      alert("스터디룸을 먼저 선택하세요");
      return;
    } else {
      navigate(url);
    }
  };

  return (
    <NavUl>
      {MyNavData.map((item, idx) => (
        <NavItemLi
          key={`myStudyRoomNav-${item.type}`}
          selected={item.type === String(type)}
          onClick={() => clickHandler(item.url)}
        >
          {item.name}
        </NavItemLi>
      ))}
    </NavUl>
  );
};

type NavItemProps = {
  selected: boolean;
};

export const MyStudyRoomMemberStatus = () => {
  const curStudyRoom = useRecoilValue(curStudyRoomAtom);
  const { status, data, refetch } = useRoomUserAllGet();
  useEffect(() => {
    refetch();
  }, [curStudyRoom]);
  if (status === "success" && data) {
    return (
      <MemberUl>
        {data.data.data.map((item) => (
          <MyStudyRoomMemberItem
            name={item.profileName}
            key={`${curStudyRoom}_member_${item.id}`}
          />
        ))}
      </MemberUl>
    );
  }
  return <></>;
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
  const { type } = useParams();

  switch (type) {
    case "home":
      return <MyHome />;
    case "attendance":
      return <>attendance</>;
    case "rank":
      return <>rank</>;
    case "chat":
      return <>chat</>;
    case "invite":
      return <>invite</>;
    case "settings":
      return <>settings</>;
    default:
      return <></>;
  }
};

export const MyHome = () => {
  return (
    <>
      <MyHomeNotification />
    </>
  );
};

const MyHomeNotification = () => {
  return (
    <div style={{ padding: "5px", width: "100%" }}>
      <MyHomeNotificationDiv>공지</MyHomeNotificationDiv>
    </div>
  );
};

export default MyStudyRoomContainer;

const StudyRoomContainerWrapDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const DropdownUl = styled.ul`
  width: 100%;
  border-radius: 10px;
  background-color: ${COLOR.MAIN};
  overflow: hidden;
  li {
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    cursor: pointer;
    &:hover {
      background-color: #b5cda3;
    }
  }
`;

const DropdownDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: 1px solid ${COLOR.MAIN};
  border-radius: 10px;
  background-color: ${COLOR.MAIN};

  .Dropdown__Chevron__Down {
    width: auto;
    height: 20px;
    color: #fff;
    font-weight: 200;
    object-fit: contain;
  }
`;

export const NavUl = styled.ul`
  border-radius: 4px;
`;

const MemberUl = styled.ul`
  border-radius: 4px;
`;
const MemberLi = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 40px;
  padding: 3px 10px;

  .Member__Item__Status {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: green;
  }
`;
export const NavItemLi = styled.li<NavItemProps>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props) => (props.selected ? COLOR.MAIN : "none")};
  /* opacity: ${(props) => (props.selected ? "0.5" : "1")}; */
  &:hover {
    background-color: ${(props) => (props.selected ? "none" : "#B5CDA3")};
  }
`;

const MyHomeNotificationDiv = styled.div`
  /* position: fixed;
  top: 0; */
  width: 100%;
  height: 40px;
  padding: 5px;
  border-radius: 10px;
  background-color: rgba(1, 1, 1, 0.07);
`;
