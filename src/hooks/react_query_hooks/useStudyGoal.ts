import {
  STUDY_GOAL_POST,
  STUDY_GOAL_ALL_GET,
  STUDY_GOAL_ONE_GET,
  STUDY_GOAL_DELETE,
} from "./../../api/studyGoal/Resource";
import { useResource, useSetResource, useSetResourceWithQuery } from "./useResource";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { StudyGoalType } from "../../api/studyGoal/types/studyGoalType";
import { useEffect } from "react";

export const useStudyGoalPost = () => {
  const queryClient = useQueryClient();
  const queryState = useSetResource({
    useMutation,
    key: STUDY_GOAL_POST.key,
    requester: STUDY_GOAL_POST.requester,
  });

  const createGoal = async(newStudyGoal: StudyGoalType) => {
    if (newStudyGoal.title !== '' && newStudyGoal.detail !== '' && newStudyGoal.goalTime !== '') {
      await queryState.mutateAsync(newStudyGoal, {
        onSuccess: () => {
          queryClient.invalidateQueries(STUDY_GOAL_ALL_GET.key);
          alert("공부 목표를 성공적으로 생성하였습니다.");
        }
      });
    } else {
      alert('모든 입력창을 채워야합니다.');
    }
  };

  useEffect(() => {
    if (queryState.isError) {
      console.log(queryState.error);
    }
  }, [queryState.isError]);
    
  return {createGoal};
};

export const useStudyGoalAllGet = () => {
  const queryState = useResource({
    useQuery,
    key: STUDY_GOAL_ALL_GET.key,
    fetcher: STUDY_GOAL_ALL_GET.fetcher,
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
  const queryClient = useQueryClient();
  const queryState = useSetResourceWithQuery({
    useMutation,
    key: STUDY_GOAL_DELETE.key,
    requester: STUDY_GOAL_DELETE.requester,
  });

  const deleteGoal = (studyGoalId: string) => {
    queryState.mutate(studyGoalId);
  }

  useEffect(() => {
    if (queryState.status === "success") {
      alert("과목을 삭제했습니다");
      queryClient.refetchQueries(STUDY_GOAL_ALL_GET.key);
    }
  }, [queryState.status]);

  return {deleteGoal};
};
