import kakaoLoginButton from "../assets/kakao_login.png";
import naverLoginButton from "../assets/naver_login.png";
import { loginWithKakao } from "./KakaoOauth";
import styled from "styled-components";
import { initializeNaverLogin } from "./NaverOauth";
import { useEffect } from "react";
const { naver } = window;
const CLIENT_ID = "qEr7Uz5gi5EshvhFY7lx";
const SocialLogin = () => {
  useEffect(() => {
    //initializeNaverLogin();
  }, []);
  return (
    <SocialLoginContainer>
      <TextDivider>다른 계정으로 로그인</TextDivider>
      <LoginButtonBox>
        <SocialLoginButton onClick={() => loginWithKakao()}>
          <img src={kakaoLoginButton} />
        </SocialLoginButton>
        <div id="naverIdLogin" />
        <SocialLoginButton href="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=qEr7Uz5gi5EshvhFY7lx&redirect_uri=http://localhost:3000/naver/callback&state=1234">
          <img src={naverLoginButton} />
        </SocialLoginButton>
      </LoginButtonBox>
    </SocialLoginContainer>
  );
};

export default SocialLogin;

const SocialLoginContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: space-beween;
`;

const TextDivider = styled.div`
  display: flex;
  width: 100%;
  margin: 2rem auto;
  color: black;
  font-size: 0.9rem;
  align-items: center;
  text-align: center;
  &::before,
  &::after {
    flex: 1;
    height: 0.5px;
    background-color: gray;
    content: "";
  }
`;

const LoginButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SocialLoginButton = styled.a`
  display: inline-block;
  width: 45%;
  height: auto;
  & > img {
    width: 100%;
    height: auto;
    object-fit: contain;
    &:hover {
      cursor: pointer;
    }
  }
`;
