import React, { PropsWithChildren } from "react";
import styled from "styled-components";

type StudyRoomLayoutProps = {
  Main: () => JSX.Element;
  Nav: () => JSX.Element;
  Dropdown?: () => JSX.Element;
  Member?: () => JSX.Element;
};
const StudyRoomLayout = (props: StudyRoomLayoutProps) => {
  const { Main, Nav, Dropdown, Member } = props;
  return (
    <StudyRoomLayout.Wrap>
      <section className="item">{Dropdown && <Dropdown />}</section>
      <section className="item">{Nav && <Nav />}</section>
      <section className="item">{Member && <Member />}</section>
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
  height: 100%;
  grid-template-columns: 3fr 7fr;
  grid-template-rows: 1.5fr 4.25fr 4.25fr;
  background-color: lightgray;
  border-collapse: collapse;
  .item {
    border: 1px solid black;
    flex-basis: 0;
    flex-grow: 1;
    padding: 5px;

    &:nth-child(1) {
      grid-row: 1/2;
    }
    &:nth-child(2) {
      grid-row: 2/3;
    }
    &:nth-child(3) {
      grid-row: 3/4;
    }
    &:nth-child(4) {
      grid-row: 1/4;
    }
  }
`;
