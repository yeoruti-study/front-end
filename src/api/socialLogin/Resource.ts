import socialLoginRequest from ".";
import { createRequest } from "../../hooks/react_query_hooks/useResource";

export const SOCIAL_LOGIN_KAKAO = createRequest({
  key: ["SOCIAL_LOGIN_KAKAO"],
  requester: socialLoginRequest.SocialLoginKakao,
});

export const SOCIAL_LOGIN_NAVER = createRequest({
  key: ["SOCIAL_LOGIN_NAVER"],
  requester: socialLoginRequest.SocialLoginNaver,
});

export const SOCIAL_LOGIN_POST = createRequest({
  key: ["SOCIAL_LOGIN_POST"],
  requester: socialLoginRequest.SocialLoginPost,
});
