import { SocialLoginType } from "./../../api/socialLogin/types/socialLoginAPI";
import { useParams } from "react-router-dom";
import { useMutation } from "react-query";
import {
  SOCIAL_LOGIN_KAKAO,
  SOCIAL_LOGIN_NAVER,
  SOCIAL_LOGIN_POST,
} from "./../../api/socialLogin/Resource";
import { useSetResource } from "./useResource";
import parseSocialCode from "../../utils/parseSocialCode";

export const useSocialLoginKakao = () => {
  const code = "";
  const queryState = useSetResource({
    useMutation,
    key: SOCIAL_LOGIN_KAKAO.key,
    requester: () =>
      SOCIAL_LOGIN_KAKAO.requester({
        provider: "kakao",
        code,
      }),
  });

  return queryState;
};

export const useSocialLoginNaver = () => {
  const queryState = useSetResource({
    useMutation,
    key: SOCIAL_LOGIN_NAVER.key,
    requester: () =>
      SOCIAL_LOGIN_NAVER.requester({
        provider: "naver",
        code: "",
      }),
  });

  return queryState;
};

export const useSocialLoginPost = () => {
  const { type } = useParams();
  let socialType = "";
  if (type === "kakao") socialType = "kakao";
  else if (type === "naver") socialType = "naver";
  const queryState = useSetResource({
    useMutation,
    key: SOCIAL_LOGIN_POST.key,
    requester: () =>
      SOCIAL_LOGIN_POST.requester({
        provider: socialType as SocialLoginType,
        code: parseSocialCode(),
      }),
  });

  return queryState;
};
