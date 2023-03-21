import { useParams } from "react-router-dom";
import {
  ROOM_USER_POST,
  ROOM_USER_DELETE,
  ROOM_USER_ALL_GET,
  ROOM_USER_STUDYROOM_GET,
} from "./../../api/roomUser/Resource";
import { useResource, useSetResource } from "./useResource";
import { useQuery, useMutation } from "react-query";
import { useRecoilValue, useSetRecoilState } from "recoil";
import myStudyRoomSetAtom from "../../atoms/myStudyRoom";
import curStudyRoomAtom from "../../atoms/curStudyRoom";

export const useRoomUserPost = () => {
  const queryState = useSetResource({
    useMutation,
    key: ROOM_USER_POST.key,
    requester: ROOM_USER_POST.requester,
  });

  const onClick = (userId: string, studyRoomId: string) => {
    queryState.mutate({
      userId,
      studyRoomId,
    });
  };

  if (queryState.status === "success")
    alert("스터디그룹 가입이 완료되었습니다");
  return onClick;
};

export const useRoomUserDelete = () => {
  // TODO: roomUserId 가져와서 주입
  const queryState = useSetResource({
    useMutation,
    key: ROOM_USER_DELETE.key,
    requester: () => ROOM_USER_DELETE.requester("asdf"),
  });

  return queryState;
};

export const useRoomUserAllGet = () => {
  // TODO: query 값 가져와서 주입
  const { rid } = useParams();
  const curStudyRoom = useRecoilValue(curStudyRoomAtom);
  //const query = "844e68a6-b8ed-4e88-9ed6-a98bbeb2a2a3";
  const queryState = useResource({
    useQuery,
    key: ROOM_USER_ALL_GET.key,
    fetcher: () => ROOM_USER_ALL_GET.fetcher(curStudyRoom.id),
  });

  return queryState;
};

export const useRoomUserStudyRoomGet = () => {
  // TODO: query 값 가져와서 주입
  const setMyStudyRoomSet = useSetRecoilState(myStudyRoomSetAtom);
  const queryState = useResource({
    useQuery,
    key: ROOM_USER_STUDYROOM_GET.key,
    fetcher: ROOM_USER_STUDYROOM_GET.fetcher,
  });

  const { status, data } = queryState;

  // const onClick = () => {
  //   queryState.refetch;
  // };
  if (status === "success" && data) {
    const idList = data?.data.data.map((item) => item.id);
    setMyStudyRoomSet(new Set(idList));
  }
  return queryState;
};
