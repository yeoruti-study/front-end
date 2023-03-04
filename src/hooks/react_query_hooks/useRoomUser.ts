import {
  ROOM_USER_POST,
  ROOM_USER_DELETE,
  ROOM_USER_ALL_GET,
  ROOM_USER_STUDYROOM_GET,
} from "./../../api/roomUser/Resource";
import { useResource, useSetResource } from "./useResource";
import { useQuery, useMutation } from "react-query";

export const useRoomUserPost = () => {
  const queryState = useSetResource({
    useMutation,
    key: ROOM_USER_POST.key,
    requester: ROOM_USER_POST.requester,
  });

  return queryState;
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
  const query = "844e68a6-b8ed-4e88-9ed6-a98bbeb2a2a3";
  const queryState = useResource({
    useQuery,
    key: ROOM_USER_ALL_GET.key,
    fetcher: () => ROOM_USER_ALL_GET.fetcher(query),
  });

  return queryState;
};

export const useRoomStudyRoomGet = () => {
  // TODO: query 값 가져와서 주입

  const queryState = useResource({
    useQuery,
    key: ROOM_USER_STUDYROOM_GET.key,
    fetcher: () => ROOM_USER_STUDYROOM_GET.fetcher("asdf"),
  });

  return queryState;
};
