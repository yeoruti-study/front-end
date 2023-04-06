import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { LoginFormType } from '../../api/generalLogin/types/generalLoginType';
import {
  GENERAL_LOGIN,
  GENERAL_LOGOUT
} from './../../api/generalLogin/Resource';
import { useResource, useSetResource } from './useResource';

export const useGeneralLogin = () => {
  const navigate = useNavigate();
  const queryState = useSetResource({
    useMutation,
    key: GENERAL_LOGIN.key,
    requester: GENERAL_LOGIN.requester,
  });

  const onClick = ({username, password}:LoginFormType) => {
    queryState.mutate({
      username,
      password,
    });
  };

  if (queryState.status === "success") {
    console.log(queryState.data);
    alert("로그인되었습니다.");
    navigate("/home");
  } else if (queryState.isError){
      console.log(queryState);
      alert("로그인 정보가 올바르지 않습니다.");
  }
  return onClick;
}

// 사용되지 않음.
export const useGeneralLogout = () => {
  const queryState = useResource({
    useQuery,
    key: GENERAL_LOGOUT.key,
    fetcher: GENERAL_LOGOUT.fetcher,
  });

  if (queryState.status === "success") {
    alert("로그아웃 되었습니다.");
  }
  return queryState;
}