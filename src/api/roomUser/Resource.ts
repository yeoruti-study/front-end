import roomUserRequest from ".";
import {
  createRequest,
  createRequestWithQuery,
  createResource,
  createResourceWithQuery,
} from "../../hooks/react_query_hooks/useResource";

export const ROOM_USER_POST = createRequest({
  key: ["ROOM_USER_POST"],
  requester: roomUserRequest.RoomUserPost,
});

export const ROOM_USER_DELETE = createRequestWithQuery({
  key: ["ROOM_USER_DELETE"],
  requester: (roomUserId: string) => roomUserRequest.RoomUserDelete(roomUserId),
});

export const ROOM_USER_ALL_GET = createResourceWithQuery({
  key: ["ROOM_USER_ALL_GET"],
  fetcher: (studyRoomId: string) => roomUserRequest.RoomUserAllGet(studyRoomId),
});

export const ROOM_USER_STUDYROOM_GET = createResource({
  key: ["ROOM_USER_STUDYROOM_GET"],
  fetcher: roomUserRequest.RoomUserStudyRoomGet,
});
