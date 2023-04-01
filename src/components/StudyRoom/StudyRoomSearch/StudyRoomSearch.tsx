import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import StudyRoomFilter from "../StudyRoomFilter/StudyRoomFilter";
import StudyRoomList from "../StudyRoomList";

const StudyRoomSearch = () => {
  return (
    <StudyRoomSearchWrap>
      <StudyRoomFilter />
      <StudyRoomList />
    </StudyRoomSearchWrap>
  );
};

const StudyRoomSearchWrap = ({ children }: PropsWithChildren) => {
  return <StudyRoomSearchDiv>{children}</StudyRoomSearchDiv>;
};
export default StudyRoomSearch;

const StudyRoomSearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: auto;
  /* overflow: scroll; */
`;
