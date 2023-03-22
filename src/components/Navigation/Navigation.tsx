import React, { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
import { useUserProfileGet } from "../../hooks/react_query_hooks/useUser";
import styled from "styled-components";
import COLOR from "../../style/color";
import { useRecoilValue } from "recoil";
import userInfoAtom from "../../atoms/userInfo";

const Navigation = () => {
  const { status, data } = useUserProfileGet();
  const userInfo = useRecoilValue(userInfoAtom);
  return (
    <NavWrap>
      <Logo />
      <TabWrap>
        <NavLink to="/home" className="Navigation__Item">
          대시보드
        </NavLink>
        <NavLink to="/studyroom/home" className="Navigation__Item">
          스터디룸
        </NavLink>
        <NavLink to="/calendar" className="Navigation__Item">
          캘린더
        </NavLink>
      </TabWrap>
      <UserTabWrap>
        {status === "success" && data ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(0,0,0,0.3)"
              className="w-6 h-6 User__Icon"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
              />
            </svg>
            <UserNameSpan>
              <span className="User__Name__Colored">
                {userInfo.profileName}
              </span>{" "}
              님
            </UserNameSpan>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(0,0,0,0.6)"
              className="w-6 h-6 Dropdown__Chevron__Down"
            >
              <path
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
          </>
        ) : (
          <LoginButton>로그인</LoginButton>
        )}
      </UserTabWrap>
    </NavWrap>
  );
};

const NavWrap = ({ children }: PropsWithChildren) => {
  return <NavWrapNav>{children}</NavWrapNav>;
};
const Logo = () => {
  return <LogoSection>LOGO</LogoSection>;
};
const TabWrap = ({ children }: PropsWithChildren) => {
  return <TabWrapSection>{children}</TabWrapSection>;
};

const UserTabWrap = ({ children }: PropsWithChildren) => {
  return <UserTabSection>{children}</UserTabSection>;
};
export default Navigation;

const NavWrapSection = styled.section`
  position: relative;
  width: 100%;
  height: 100px;
`;
const LogoSection = styled.section`
  width: 100px;
  height: 100%;
`;
const TabWrapSection = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 100%;

  .Navigation__Item {
    padding: 10px;
    border-radius: 10px;
    border: none;
    font-weight: 700;
    color: rgba(1, 1, 1, 0.3);
    text-decoration: none;
    :hover {
      background-color: ${COLOR.MAIN};
      opacity: 0.6;
      color: green;
    }
  }
`;

const UserTabSection = styled.section`
  display: flex;
  align-items: center;
  gap: 5px;
  width: auto;
  height: 100%;

  .User__Icon {
    height: 40px;
    width: auto;
  }
  .Dropdown__Chevron__Down {
    height: 20px;
    width: auto;
  }
`;
const NavWrapNav = styled.nav`
  z-index: 900;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 20px;
  /* border-radius: 20px; */
  border: none;
  background-color: #fff;
  -webkit-box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);

  font-weight: 700;
  color: rgba(1, 1, 1, 0.3);
`;

const LoginButton = styled.button`
  padding: 10px;
  width: 100px;
  border-radius: 10px;
  border: none;
  background-color: orangered;
  color: #fff;
  font-weight: 700;
`;

const UserNameSpan = styled.span`
  font-size: 0.9rem;
  color: rgba(1, 1, 1, 0.5);
  white-space: nowrap;
  .User__Name__Colored {
    color: ${COLOR.DARKMAIN};
  }
`;
