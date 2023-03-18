import React from "react";
import { useStudyRoomAllGet } from "../../hooks/react_query_hooks/useStudyRoom";
import StudyList from "./StudyList";

const StudyRoomList = () => {
  const { status, data } = useStudyRoomAllGet();
  if (status === "success" && data) {
    return <StudyList roomList={data.data.data} />;
  } else {
    return <></>;
  }
};

export default StudyRoomList;
