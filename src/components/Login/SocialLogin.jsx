import kakaoLoginButton from "../../assets/kakao_login.png";
import naverLoginButton from "../../assets/naver_login.png";
import styled from "styled-components";

const SocialLogin = () => {
  return (
    <SocialLoginContainer>
      <TextDivider>다른 계정으로 로그인</TextDivider>
      <LoginButtonBox>
        {/* <SocialLoginButton src={kakaoLoginButton}> */}
        <SocialLoginA
          href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=http://localhost:3000/login/oauth2/code/kakao`}
        >
          <SocialLoginButton src={kakaoLoginButton}></SocialLoginButton>
        </SocialLoginA>
        {/* </SocialLoginButton> */}
        <SocialLoginA
          href={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}&scope=name%20email%20profile_image&state=1234&redirect_uri=http://localhost:8080/login/oauth2/code/naver`}
        >
          <SocialLoginButton src={naverLoginButton} />
        </SocialLoginA>
      </LoginButtonBox>
    </SocialLoginContainer>
  );
};

export default SocialLogin;
const SocialLoginA = styled.a`
  width: 200px;
  height: 100px;
`;
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

const SocialLoginButton = styled.img`
  width: 100%;
  object-fit: contain;
  &:hover {
    cursor: pointer;
  }
`;
