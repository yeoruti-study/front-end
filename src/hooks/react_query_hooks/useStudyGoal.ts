import {
  STUDY_GOAL_POST,
  STUDY_GOAL_ALL_GET,
  STUDY_GOAL_ONE_GET,
  STUDY_GOAL_DELETE,
} from "./../../api/studyGoal/Resource";
import { useResource, useSetResource } from "./useResource";
import { useQuery, useMutation } from "react-query";
import { StudyGoalType } from "../../api/studyGoal/types/studyGoalType";

export const useStudyGoalPost = () => {
  const queryState = useSetResource({
    useMutation,
    key: STUDY_GOAL_POST.key,
    requester: STUDY_GOAL_POST.requester,
  });

  const create = (newStudyGoal:StudyGoalType) => {
    if (newStudyGoal.title !== '' && newStudyGoal.detail !== '' && newStudyGoal.goalTime !== '' && newStudyGoal.userStudySubjectId !== '') {
      queryState.mutate(newStudyGoal);
    }
  }

  if (queryState.status === 'success') {
    console.log('생성 성공!');
  }
  else console.log('생성 실패!');
    
  return {create};
};

export const useStudyGoalAllGet = () => {
  // TODO: 현재 로그인된 사용자 id 삽입
  const query = '05637e09-0ce5-40a9-ab7f-08f792fe56dc';
  const queryState = useResource({
    useQuery,
    key: STUDY_GOAL_ALL_GET.key,
    fetcher: () => STUDY_GOAL_ALL_GET.fetcher(query),
  });

  return queryState;
};

export const useStudyGoalOneGet = () => {
  // TODO: 현재 선택된 studygoal을 recoil에 저장하고, 이를 참조하여 fetcher에 삽입.
  const queryState = useResource({
    useQuery,
    key: STUDY_GOAL_ONE_GET.key,
    fetcher: () => STUDY_GOAL_ONE_GET.fetcher('temp'),
  });

  return queryState;
};

export const useStudyGoalDelete = () => {
  // TODO: 현재 선택된 studygoal을 recoil에 저장하고, 이를 참조하여 requester에 삽입.
  const queryState = useSetResource({
    useMutation,
    key: STUDY_GOAL_DELETE.key,
    requester: () => STUDY_GOAL_DELETE.requester('temp'),
  });

  return queryState;
};
