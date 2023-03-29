import {
  STUDYROOM_PUT,
  STUDYROOM_DELETE,
  STUDYROOM_CATEGORY_GET,
  STUDYROOM_PW_PATCH,
  STUDYROOM_PW_CHECK_POST,
  STUDYROOM_POST,
} from "./../../api/studyRoom/Resource";
import { STUDYROOM_ALL_GET } from "../../api/studyRoom/Resource";
import { useResource, useSetResource } from "./useResource";
import { useQuery, useMutation } from "react-query";
import { StudyRoomPostRequest } from "../../api/studyRoom/types/studyRoomAPI";
import { useSetRecoilState } from "recoil";
import studyPwPopupAtom from "../../atoms/studyPwPopup";
import { useEffect } from "react";

export const useStudyRoomPost = () => {
  const queryState = useSetResource({
    useMutation,
    key: STUDYROOM_POST.key,
    requester: STUDYROOM_POST.requester,
  });

  const onClick = (params: StudyRoomPostRequest) => {
    queryState.mutate({
      ...params,
    });
  };

  if (queryState.status === "success") alert("스터디룸 생성이 완료되었습니다");
  return onClick;
};
export const useStudyRoomAllGet = () => {
  const queryState = useResource({
    useQuery,
    key: STUDYROOM_ALL_GET.key,
    fetcher: STUDYROOM_ALL_GET.fetcher,
  });

  return queryState;
};

export const useStudyRoomPut = () => {
  const queryState = useSetResource({
    useMutation,
    key: STUDYROOM_PUT.key,
    requester: STUDYROOM_PUT.requester,
  });

  return queryState;
};

export const useStudyRoomDelete = () => {
  const queryState = useSetResource({
    useMutation,
    key: STUDYROOM_DELETE.key,
    requester: STUDYROOM_DELETE.requester,
  });

  return queryState;
};

export const useStudyRoomCategoryGet = () => {
  const queryState = useResource({
    useQuery,
    key: STUDYROOM_CATEGORY_GET.key,
    fetcher: STUDYROOM_CATEGORY_GET.fetcher,
  });

  return queryState;
};

export const useStudyRoomPwPatch = () => {
  const queryState = useSetResource({
    useMutation,
    key: STUDYROOM_PW_PATCH.key,
    requester: STUDYROOM_PW_PATCH.requester,
  });

  return queryState;
};

export const useStudyRoomPwCheckPost = () => {
  const setStudyPwPopup = useSetRecoilState(studyPwPopupAtom);
  const queryState = useSetResource({
    useMutation,
    key: STUDYROOM_PW_CHECK_POST.key,
    requester: STUDYROOM_PW_CHECK_POST.requester,
  });

  const onClick = (id: string, roomPassword: string) => {
    queryState.mutate({
      id,
      roomPassword,
    });
  };

  const { status } = queryState;
  useEffect(() => {
    if (status === "success") {
      setStudyPwPopup(false);
    } else if (status === "error") {
      alert("비밀번호 오류");
    }
  }, [status]);

  return onClick;
};
