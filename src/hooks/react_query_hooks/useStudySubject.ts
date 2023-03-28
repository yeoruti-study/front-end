import {
  USER_STUDY_SUBJECT_LIST_GET,
  USER_STUDY_SUBJECT_POST,
  USER_STUDY_SUBJECT_GET,
  USER_STUDY_SUBJECT_DELETE,
} from "./../../api/userStudySubject/Resource";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  useResource,
  useSetResource,
  useSetResourceWithQuery,
} from "./useResource";
import { useRecoilValue, useSetRecoilState } from "recoil";
import subListState from "../../atoms/subList";
import newSubState from "../../atoms/newSub";
import { useEffect } from "react";

export const useUserStudySubjectPost = () => {
  const queryClient = useQueryClient();
  const queryState = useSetResource({
    useMutation,
    key: USER_STUDY_SUBJECT_POST.key,
    requester: USER_STUDY_SUBJECT_POST.requester,
  });

  const onClick = (title: string) => {
    queryState.mutate({ title });
  };

  useEffect(() => {
    if (queryState.status === "success") {
      alert("과목을 성공적으로 생성했습니다");
      // queryClient.refetchQueries()
      queryClient.refetchQueries(USER_STUDY_SUBJECT_LIST_GET.key);
    }
  }, [queryState.status]);

  return onClick;
};

export const useUserStudySubjectListGet = () => {
  const setSubList = useSetRecoilState(subListState);
  const queryState = useResource({
    useQuery,
    key: USER_STUDY_SUBJECT_LIST_GET.key,
    fetcher: USER_STUDY_SUBJECT_LIST_GET.fetcher,
  });

  useEffect(() => {
    if (queryState.status === "success" && queryState.data) {
      setSubList([
        { id: "default", title: "과목 추가하기" },
        ...queryState.data.data.data,
      ]);
    }
  }, [queryState.status]);

  return queryState;
};

export const useUserStudySubjectGet = (userStudySubjectId: string) => {
  const queryState = useResource({
    useQuery,
    key: USER_STUDY_SUBJECT_GET.key,
    fetcher: () => USER_STUDY_SUBJECT_GET.fetcher(userStudySubjectId),
  });

  return queryState;
};

export const useUserStudySubjectDelete = () => {
  const queryState = useSetResourceWithQuery({
    useMutation,
    key: USER_STUDY_SUBJECT_DELETE.key,
    requester: USER_STUDY_SUBJECT_DELETE.requester,
  });
  const queryClient = useQueryClient();
  const onClick = (userStudySubjectId: string) => {
    queryState.mutate(userStudySubjectId);
  };

  useEffect(() => {
    if (queryState.status === "success") {
      alert("공부 과목을 성공적으로 삭제했습니다");
      queryClient.refetchQueries(USER_STUDY_SUBJECT_LIST_GET.key);
    }
  }, [queryState.status]);

  return onClick;
};
