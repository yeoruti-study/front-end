import { useRecoilValue, useSetRecoilState } from "recoil";
import { useQuery, useMutation } from "react-query";
import {
  USER_RECORD_BY_SUBJECT_GET,
  USER_RECORD_END_PATCH,
  USER_RECORD_LIST_GET,
  USER_RECORD_START_POST,
} from "../../api/record/Resource";
import { useResource, useSetResource } from "./useResource";
import { timerIdAtom, timerSubjectAtom } from "../../atoms/timer";
import localConsole from "../../utils/localConsole";
import { useEffect } from "react";

export const useUserRecordListGet = () => {
  const queryState = useResource({
    useQuery,
    key: USER_RECORD_LIST_GET.key,
    fetcher: USER_RECORD_LIST_GET.fetcher,
  });

  return queryState;
};

export const useUserRecordBySubjectGet = (userStudySubjectId: string) => {
  const queryState = useResource({
    useQuery,
    key: USER_RECORD_BY_SUBJECT_GET.key,
    fetcher: () => USER_RECORD_BY_SUBJECT_GET.fetcher(userStudySubjectId),
  });

  return queryState;
};

export const useUserRecordDelete = () => {};

export const useUserRecordStartPost = () => {
  const setTimerId = useSetRecoilState(timerIdAtom);
  const timerSubject = useRecoilValue(timerSubjectAtom);
  const queryState = useSetResource({
    useMutation,
    key: USER_RECORD_START_POST.key,
    requester: USER_RECORD_START_POST.requester,
  });

  const onClick = () => {
    queryState.mutate({ userStudySubjectId: timerSubject.id });
  };
  const { data, status } = queryState;
  useEffect(() => {
    if (status === "success" && data) {
      setTimerId(data.data.data.recordId);
      alert("타이머 시작 성공");
    }
  }, [status]);

  return onClick;
};

export const useUserRecordEndPatch = () => {
  const timerId = useRecoilValue(timerIdAtom);
  const queryState = useSetResource({
    useMutation,
    key: USER_RECORD_END_PATCH.key,
    requester: USER_RECORD_END_PATCH.requester,
  });

  const onClick = () => {
    localConsole?.log("타이머id: ", timerId);
    queryState.mutate({ recordId: timerId });
  };
  useEffect(() => {
    if (queryState.status === "success") {
      alert("타이머 종료 성공");
    }
  }, [queryState.status]);

  return onClick;
};
