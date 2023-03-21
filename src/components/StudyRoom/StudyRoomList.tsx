import React from "react";
import styled from "styled-components";
import { useRoomUserPost } from "../../hooks/react_query_hooks/useRoomUser";
import { useStudyRoomAllGet } from "../../hooks/react_query_hooks/useStudyRoom";
import StudyRoomItem from "./StudyRoomItem";

const StudyRoomList = () => {
  const { status, data } = useStudyRoomAllGet();
  const onClick = useRoomUserPost();
  if (status === "success" && data) {
    return (
      <ListUl>
        {data.data.data.map((item, idx) => (
          <StudyRoomItem roomItemData={item} key={item.id} onClick={onClick} />
        ))}
      </ListUl>
    );
  } else {
    return <></>;
  }
};

export default StudyRoomList;

const ListUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 31.25rem;
  /* transform: translateX(100px); */

  /* .Room__Ready {
    transition: transform 0.5s;
    transform: translateX(-100px);
  }
  .Room__Default {
    transition: transform 0.5s;
    transform: translateX(0);
  } */
`;
