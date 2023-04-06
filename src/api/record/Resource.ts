import recordRequest from ".";
import {
  createRequest,
  createRequestWithQuery,
  createResource,
  createResourceWithQuery,
} from "../../hooks/react_query_hooks/useResource";

export const USER_RECORD_END_PATCH = createRequest({
  key: [`USER_RECORD_END_PATCH`],
  requester: recordRequest.UserRecordEndPatch,
});

export const USER_RECORD_START_POST = createRequest({
  key: [`USER_RECORD_START_POST`],
  requester: recordRequest.UserRecordStartPost,
});

export const USER_RECORD_DELETE = createRequestWithQuery({
  key: [`USER_RECORD_DELETE`],
  requester: (recordId: string) => recordRequest.UserRecordDelete(recordId),
});

export const USER_RECORD_BY_SUBJECT_GET = createResourceWithQuery({
  key: [`USER_RECORD_BY_SUBJECT_GET`],
  fetcher: (userStudySubjectId: string) =>
    recordRequest.UserRecordBySubjectGet(userStudySubjectId),
});

export const USER_RECORD_LIST_GET = createResource({
  key: [`USER_RECORD_LIST_GET`],
  fetcher: recordRequest.UserRecordListGet,
});
