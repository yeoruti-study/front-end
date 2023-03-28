import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import studyRoomFilterAtom from "../../atoms/studyRoomFilter";
import { useRoomUserPost } from "../../hooks/react_query_hooks/useRoomUser";
import { useStudyRoomAllGet } from "../../hooks/react_query_hooks/useStudyRoom";
import StudyRoomItem from "./StudyRoomItem";

const StudyRoomList = () => {
  const studyRoomFilter = useRecoilValue(studyRoomFilterAtom);
  const { status, data } = useStudyRoomAllGet();
  const onClick = useRoomUserPost();
  if (status === "success" && data) {
    if (studyRoomFilter === "") {
      return (
        <ListUl>
          {data.data.data.map((item, idx) => (
            <StudyRoomItem
              roomItemData={item}
              key={item.id}
              onClick={onClick}
            />
          ))}
        </ListUl>
      );
    } else {
      return (
        <ListUl>
          {data.data.data.map((item, idx) =>
            item.studyCategoryDto.id === studyRoomFilter ? (
              <StudyRoomItem
                roomItemData={item}
                key={item.id}
                onClick={onClick}
              />
            ) : (
              <></>
            )
          )}
        </ListUl>
      );
    }
  } else {
    return <></>;
  }
};

export default StudyRoomList;

const ListUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  width: 31.25rem;
`;
