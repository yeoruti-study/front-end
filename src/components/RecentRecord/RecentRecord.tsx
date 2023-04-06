import React, { PropsWithChildren } from "react";
import { UserRecord } from "../../api/record/types/recordAPI";
import styled from "styled-components";

//  id: string;
//  startTime: string;
//  endTime: string;
//  userStudySubjectId: string;
//  totalStudyTime: string;
//  studying: boolean;

type RecentRecordProps = {
  recordList?: UserRecord[];
};
const RecentRecord = (props: RecentRecordProps) => {
  const { recordList } = props;
  return (
    <RecentRecordWrap>
      <RecentRecordList>
        {recordList?.map((item, idx) => {
          return <RecentRecordItem />;
        })}
      </RecentRecordList>
    </RecentRecordWrap>
  );
};

const RecentRecordWrap = ({ children }: PropsWithChildren) => {
  return <RecentRecordWrapSection>{children}</RecentRecordWrapSection>;
};
const RecentRecordList = ({ children }: PropsWithChildren) => {
  return <RecentRecordUl>{children}</RecentRecordUl>;
};
const RecentRecordItem = () => {
  return <RecentRecordLi></RecentRecordLi>;
};
export default RecentRecord;

const RecentRecordWrapSection = styled.section``;
const RecentRecordUl = styled.ul``;
const RecentRecordLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
