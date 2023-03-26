import React, { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
import { useUserProfileGet } from "../../hooks/react_query_hooks/useUser";
import styled from "styled-components";
import COLOR from "../../style/color";
import { useRecoilValue } from "recoil";
import userInfoAtom from "../../atoms/userInfo";

const Navigation = () => {
  const { status, data } = useUserProfileGet();

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
        <BottomNavItem>
          <NavLink to="/settings" className="Navigation__Item">
            설정
          </NavLink>
          <Logout />
        </BottomNavItem>
      </TabWrap>
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

const Logout = () => {
  // const logoutHandler =
  return <LogoutDiv className="Navigation__Item">로그아웃</LogoutDiv>;
};
const BottomNavItem = ({ children }: PropsWithChildren) => {
  return <BottomNavItemDiv>{children}</BottomNavItemDiv>;
};
export default Navigation;

const NavWrapSection = styled.section`
  position: relative;
  width: 100%;
  height: 100px;
`;
const LogoSection = styled.section`
  width: 100%;
  height: 50px;
  margin-bottom: 30px;
  background-color: ${COLOR.MAIN};
  color: #fff;
`;
const TabWrapSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: 100%;
  .Navigation__Item {
    padding: 10px;
    border-radius: 10px;
    border: none;
    font-size: 0.9rem;
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

const NavWrapNav = styled.nav`
  z-index: 900;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */

  width: 150px;
  height: 100%;
  padding: 30px 20px;
  /* border-radius: 20px; */
  border: none;
  background-color: #fff;
  -webkit-box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);

  font-weight: 700;
  color: rgba(1, 1, 1, 0.3);
`;
const LogoutDiv = styled.div``;

const BottomNavItemDiv = styled.div`
  position: absolute;
  bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
