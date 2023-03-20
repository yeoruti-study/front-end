import { useMutation, useQuery } from "react-query";
import { UserEdit, UserInfo } from "../../api/user/types/userAPI";
import {
  USER_ALL_GET,
  USER_DELETE,
  USER_GET_WITH_ID,
  USER_POST,
  USER_PROFILE_GET,
  USER_PROFILE_PUT,
} from "./../../api/user/Resource";
import {
  useResource,
  useSetResource,
  useSetResourceWithQuery,
} from "./useResource";

export const useUserPost = () => {
  const queryState = useSetResource({
    useMutation,
    key: USER_POST.key,
    requester: USER_POST.requester,
  });

  const onClick = (userInfo: UserInfo) => {
    queryState.mutate({
      ...userInfo,
    });
  };

  if (queryState.status === "success") alert("회원가입을 완료했습니다");

  return onClick;
};

export const useUserProfileGet = () => {
  const queryState = useResource({
    useQuery,
    key: USER_PROFILE_GET.key,
    fetcher: USER_PROFILE_GET.fetcher,
  });

  return queryState;
};

export const useUserProfilePut = () => {
  const queryState = useSetResource({
    useMutation,
    key: USER_PROFILE_PUT.key,
    requester: USER_PROFILE_PUT.requester,
  });

  const onClick = (userEdit: UserEdit) => {
    queryState.mutate({
      ...userEdit,
    });
  };

  if (queryState.status === "success") alert("회원정보 수정을 완료했습니다");
  return onClick;
};

export const useUserDelete = () => {
  const queryState = useSetResource({
    useMutation,
    key: USER_DELETE.key,
    requester: USER_DELETE.requester,
  });

  const onClick = (username: string, password: string) => {
    queryState.mutate({ username, password });
  };

  if (queryState.status === "success") {
    alert("회원탈퇴를 완료했습니다");
  }

  return onClick;
};

export const useUserAllGet = () => {
  const queryState = useResource({
    useQuery,
    key: USER_ALL_GET.key,
    fetcher: USER_ALL_GET.fetcher,
  });

  return queryState;
};

export const useUserGetWithID = (userId: string) => {
  const queryState = useResource({
    useQuery,
    key: USER_GET_WITH_ID.key,
    fetcher: () => USER_GET_WITH_ID.fetcher(userId),
  });

  return queryState;
};
