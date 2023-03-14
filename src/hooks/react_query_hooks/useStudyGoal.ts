import {
  STUDY_GOAL_POST,
  STUDY_GOAL_ALL_GET,
  STUDY_GOAL_ONE_GET,
  STUDY_GOAL_DELETE,
} from "./../../api/studyGoal/Resource";
import { useResource, useSetResource } from "./useResource";
import { useQuery, useMutation } from "react-query";

export const useStudyGoalPost = () => {
  const queryState = useSetResource({
    useMutation,
    key: STUDY_GOAL_POST.key,
    requester: STUDY_GOAL_POST.requester,
  });

  return queryState;
};

export const useStudyGoalAllGet = (userId: string) => {
  const queryState = useResource({
    useQuery,
    key: STUDY_GOAL_ALL_GET.key,
    fetcher: () => STUDY_GOAL_ALL_GET.fetcher(userId),
  });

  return queryState;
};

export const useStudyGoalOneGet = (studyGoalId: string) => {
  const queryState = useResource({
    useQuery,
    key: STUDY_GOAL_ONE_GET.key,
    fetcher: () => STUDY_GOAL_ONE_GET.fetcher(studyGoalId),
  });

  return queryState;
};

export const useStudyGoalDelete = (studyGoalId: string) => {
  const queryState = useSetResource({
    useMutation,
    key: STUDY_GOAL_DELETE.key,
    requester: () => STUDY_GOAL_DELETE.requester(studyGoalId),
  });

  return queryState;
};
