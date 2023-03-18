import userStudySubjectRequest from ".";
import {
  createRequest,
  createRequestWithQuery,
  createResource,
  createResourceWithQuery,
} from "../../hooks/react_query_hooks/useResource";

export const USER_STUDY_SUBJECT_POST = createRequest({
  key: ["USER_STUDY_SUBJECT_POST"],
  requester: userStudySubjectRequest.UserStudySubjectPost,
});

export const USER_STUDY_SUBJECT_LIST_GET = createResource({
  key: ["USER_STUDY_SUBJET_LIST_GET"],
  fetcher: userStudySubjectRequest.UserStudySubjectListGet,
});

export const USER_STUDY_SUBJECT_GET = createResourceWithQuery({
  key: ["USER_STUDY_SUBJECT_GET"],
  fetcher: (userStudySubjectId: string) =>
    userStudySubjectRequest.UserStudySubjectGet(userStudySubjectId),
});

export const USER_STUDY_SUBJECT_DELETE = createRequestWithQuery({
  key: ["USER_STUDY_SUBJECT_DELETE"],
  requester: (userStudySubjectId: string) =>
    userStudySubjectRequest.UserStudySubjectDelete(userStudySubjectId),
});
