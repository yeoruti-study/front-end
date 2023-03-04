import studyRoomRequest from ".";
import {
  createRequest,
  createResource,
} from "../../hooks/react_query_hooks/useResource";

export const STUDYROOM_ALL_GET = createResource({
  key: [`STUDYROOM_ALL_GET`],
  fetcher: studyRoomRequest.StudyRoomAllGet,
});

export const STUDYROOM_PUT = createRequest({
  key: ["STUDYROOM_PUT"],
  requester: studyRoomRequest.StudyRoomPut,
});

export const STUDYROOM_DELETE = createRequest({
  key: ["STUDYROOM_DELETE"],
  requester: studyRoomRequest.StudyRoomDelete,
});

export const STUDYROOM_CATEGORY_GET = createResource({
  key: ["STUDYROOM_CATEGORY_GET"],
  fetcher: studyRoomRequest.StudyRoomCategoryGet,
});

export const STUDYROOM_PW_PATCH = createRequest({
  key: ["STUDYROOM_PW_PATCH"],
  requester: studyRoomRequest.StudyRoomPwPatch,
});

export const STUDYROOM_PW_CHECK_POST = createRequest({
  key: ["STUDYROOM_PW_CHECK_POST"],
  requester: studyRoomRequest.StudyRoomPwCheckPost,
});
