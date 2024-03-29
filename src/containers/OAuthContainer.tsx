import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { SocialLoginType } from "../api/socialLogin/types/socialLoginAPI";
import { useSocialLoginPost } from "../hooks/react_query_hooks/useSocialLogin";
import parseSocialCode from "../utils/parseSocialCode";

const OAuthContainer = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  const location = useLocation();
  const queryState = useSocialLoginPost();
  const { status, data } = queryState;
  useEffect(() => {
    let socialType = "";
    if (type === "kakao") socialType = "kakao";
    else if (type === "naver") socialType = "naver";
    queryState.mutate({
      provider: socialType as SocialLoginType,
      code: parseSocialCode(),
    });
    console.log(status);
  }, []);
  useEffect(() => {
    const origin = location.state?.from?.pathname || "/home";
    if (status === "success") navigate(origin);

  }, [status]);
  return <div>oauth handler page</div>;
};

export default OAuthContainer;
