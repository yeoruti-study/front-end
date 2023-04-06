//deprecated

import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import StudyList from "./StudyList";
import StudyModal from "./StudyModal/StudyModal";
import { useRoomUserAllGet } from "../../hooks/react_query_hooks/useRoomUser";
import { useStudyRoomAllGet } from "../../hooks/react_query_hooks/useStudyRoom";
import localConsole from "../../utils/localConsole";

const StudyHome = () => {
  const { status, data } = useStudyRoomAllGet();
  // const { status, data } = useRoomUserAllGet();
  if (status === "success") localConsole?.log(data?.data.data);
  return (
    <>
      {/* <StudyModal /> */}
      <StudyWrap>
        <StudyHeader>
          <h1>스터디 룸</h1>
        </StudyHeader>
        <StudyBody>
          {status === "success" && data && (
            <StudyList roomList={data.data.data} />
          )}
        </StudyBody>
      </StudyWrap>
    </>
  );
};

const StudyWrap = ({ children }: PropsWithChildren) => {
  return <StudyWrapDiv>{children}</StudyWrapDiv>;
};
const HeaderWrap = ({ children }: PropsWithChildren) => {
  return <HeaderWrapDiv>{children}</HeaderWrapDiv>;
};
const StudyHeader = ({ children }: PropsWithChildren) => {
  return <HeaderWrap>{children}</HeaderWrap>;
};
const BodyWrap = ({ children }: PropsWithChildren) => {
  return <BodyWrapDiv>{children}</BodyWrapDiv>;
};
const StudyBody = ({ children }: PropsWithChildren) => {
  return <BodyWrap>{children}</BodyWrap>;
};

const BodyWrapDiv = styled.div``;
const StudyWrapDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const HeaderWrapDiv = styled.div`
  padding-bottom: 4.375rem;
`;
export default StudyHome;
