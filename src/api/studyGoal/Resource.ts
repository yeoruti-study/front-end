import studyGoalRequest from ".";
import {
  createRequest,
  createRequestWithQuery,
  createResource,
  createResourceWithQuery,
} from "../../hooks/react_query_hooks/useResource";

export const STUDY_GOAL_POST = createRequest({
  key: ["STUDY_GOAL_POST"],
  requester: studyGoalRequest.StudyGoalPost,
});

export const STUDY_GOAL_ALL_GET = createResource({
  key: ["STUDY_GOAL_ALL_GET"],
  fetcher: studyGoalRequest.StudyGoalAllGet,
});

export const STUDY_GOAL_ONE_GET = createResourceWithQuery({
  key: ["STUDY_GOAL_ONE_GET"],
  fetcher: (studyGoalId: string) => studyGoalRequest.StudyGoalOneGet(studyGoalId),
});

export const STUDY_GOAL_DELETE = createRequestWithQuery({
  key: ["STUDY_GOAL_DELETE"],
  requester: (studyGoalId?: string) => studyGoalRequest.StudyGoalDelete(studyGoalId!),
});
