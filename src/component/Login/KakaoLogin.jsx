import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { requestUserInfo } from './KakaoOauth';
const KakaoLogin = () => {
  const { search } = useLocation();
  const code = new URLSearchParams(search).get("code");

  useEffect(() => {
    requestUserInfo(code);
  }, []);

  return <div>KakaoLogin 페이지입니다.</div>
}

export default KakaoLogin;