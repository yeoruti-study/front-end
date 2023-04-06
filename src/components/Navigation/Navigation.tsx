import React, { PropsWithChildren } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUserProfileGet } from "../../hooks/react_query_hooks/useUser";
import styled from "styled-components";
import COLOR from "../../style/color";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userInfoAtom from "../../atoms/userInfo";
import logoutRequest from "../../api/generalLogin";
import localConsole from "../../utils/localConsole";
import newLogo from "../../assets/logo_no_background.png";

const Navigation = () => {
  const { status, data } = useUserProfileGet();

  return (
    <NavWrap>
      <Logo />
      <TabWrap>
        <NavLink to="/home" className="Navigation__Item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z"
              clipRule="evenodd"
            />
          </svg>

          <span>대시보드</span>
        </NavLink>
        <NavLink to="/studyroom/home" className="Navigation__Item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
              clipRule="evenodd"
            />
            <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
          </svg>
          <span>스터디룸</span>
        </NavLink>
        <NavLink to="/calendar" className="Navigation__Item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
              clipRule="evenodd"
            />
          </svg>
          <span>캘린더</span>
        </NavLink>
        <BottomNavItem>
          <NavLink to="/settings" className="Navigation__Item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                clipRule="evenodd"
              />
            </svg>
            <span>설정</span>
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
  return <LogoImg src={newLogo} alt="여럿이 로고"></LogoImg>;
};
const TabWrap = ({ children }: PropsWithChildren) => {
  return <TabWrapSection>{children}</TabWrapSection>;
};

const Logout = () => {
  const navigate = useNavigate();
  const setUserInfo = useSetRecoilState(userInfoAtom);
  const handleLogout = () => {
    logoutRequest
      .GeneralLogoutGet()
      .then((res) => {
        localConsole?.log(res);
        setUserInfo({
          id: "",
          username: "",
          roles: "",
          profileName: "",
          profileBirth: "",
          profileImagePath: "",
          alarmPermission: true,
          friendAcceptance: true,
        });
        alert("로그아웃되었습니다");
        navigate("/", { replace: true });
      })
      .catch((e) => {
        localConsole?.log(e);
        setUserInfo({
          id: "",
          username: "",
          roles: "",
          profileName: "",
          profileBirth: "",
          profileImagePath: "",
          alarmPermission: true,
          friendAcceptance: true,
        });
      });
  };
  // const logoutHandler =
  return (
    <LogoutDiv className="Navigation__Item" onClick={handleLogout}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
          clipRule="evenodd"
        />
      </svg>
      <span>로그아웃</span>
    </LogoutDiv>
  );
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
const LogoImg = styled.img`
  height: 40px;
  width: auto;
  margin-bottom: 30px;
  /* background-color: ${COLOR.MAIN}; */
  color: #fff;
`;
const TabWrapSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: 100%;
  .Navigation__Item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: none;
    font-size: 0.8rem;
    font-weight: 700;
    color: rgba(1, 1, 1, 0.3);
    text-decoration: none;
    :hover {
      background-color: ${COLOR.MAIN};
      opacity: 0.6;
      color: green;
    }

    svg {
      height: 25px;
      width: auto;
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
  padding: 30px 15px;
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
  bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
