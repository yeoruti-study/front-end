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
  const queryState = useSetResource({
    useMutation,
    key: STUDYROOM_PW_CHECK_POST.key,
    requester: STUDYROOM_PW_CHECK_POST.requester,
  });

  return queryState;
};
