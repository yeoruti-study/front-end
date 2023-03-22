import { useMutation, useQuery } from 'react-query';
import {
  GENERAL_LOGIN,
  GENERAL_LOGOUT
} from './../../api/generalLogin/Resource';
import { useResource, useSetResource } from './useResource';

export const useGeneralLogin = () => {
  const queryState = useSetResource({
    useMutation,
    key: GENERAL_LOGIN.key,
    requester: GENERAL_LOGIN.requester,
  });

  const onClick = (username: string, password: string) => {
    queryState.mutate({
      username,
      password,
    });
  };

  if (queryState.status === "success") {
    alert("로그인되었습니다.");
  }
  return onClick;
}

export const useGeneralLogout = () => {
  const queryState = useResource({
    useQuery,
    key: GENERAL_LOGIN.key,
    fetcher: GENERAL_LOGOUT.fetcher,
  });

  if (queryState.status === "success") {
    alert("로그인되었습니다.");
  }
  return queryState;
}