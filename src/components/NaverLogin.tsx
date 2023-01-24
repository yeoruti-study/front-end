import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CLIENT_ID, requestUserInfo, userAccessToken } from "./NaverOauth";

const { naver } = window;

const NaverLogin = () => {
  const { search } = useLocation();
  const code = new URLSearchParams(search).get("code");
  useEffect(() => {
    console.log(code);
  }, []);
};

export default NaverLogin;
