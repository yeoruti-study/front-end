import React, { PropsWithChildren } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import userInfoAtom from "../../atoms/userInfo";
import COLOR from "../../style/color";
import localConsole from "../../utils/localConsole";
type StudyRoomLayoutProps = {
  Main: () => JSX.Element;
  Nav: () => JSX.Element;
  Dropdown?: () => JSX.Element;
  Member?: () => JSX.Element;
};
const StudyRoomLayout = (props: StudyRoomLayoutProps) => {
  const { Main, Nav, Dropdown, Member } = props;
  // userInfoAtom update test
  // const userInfo = useRecoilValue(userInfoAtom);
  // localConsole?.log(userInfo);
  return (
    <StudyRoomLayout.Wrap>
      <section className="item">
        {Dropdown && <section>{<Dropdown />}</section>}
        {Nav && <section>{<Nav />}</section>}
        {Member && <section>{<Member />}</section>}
      </section>

      <section className="item">{Main && <Main />}</section>
    </StudyRoomLayout.Wrap>
  );
};

const StudyRoomLayoutWrapper = ({ children }: PropsWithChildren) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

StudyRoomLayout.Wrap = StudyRoomLayoutWrapper;
export default StudyRoomLayout;

const LayoutContainer = styled.section`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 2fr 8fr;

  border-collapse: collapse;
  //overflow: hidden;
  color: #fff;
  .item {
    flex-basis: 0;
    flex-grow: 1;
    padding: 20px;

    &:nth-child(1) {
      display: flex;
      flex-direction: column;

      grid-column: 1/2;
      min-width: 162px;
      background-color: ${COLOR.DARKMAIN};

      section {
        padding: 20px 0;
        border-bottom: 1px solid ${COLOR.MAIN};
      }
    }
    &:nth-child(2) {
      display: flex;
      justify-content: center;
      width: 100%;
      padding-top: 35px;
      /* padding-top: 100px; */
      grid-column: 2/3;
      /* min-width: 162px; */
      background-color: rgba(0, 0, 0, 0.05);
      color: black;
    }
    /* &:nth-child(3) {
      grid-row: 3/4;
      min-width: 162px;
    }
    &:nth-child(4) {
      grid-row: 1/4;
      background-color: #fff;
      color: black;
      display: flex;
      justify-content: center;
      align-items: center;
    } */
  }
`;
