import kakaoLoginButton from '../../assets/kakao_login.png';
import naverLoginButton from '../../assets/naver_login.png';
import styled from 'styled-components';

const SocialLogin = () => {
  return (
    <Container>
      <TextDivider>다른 계정으로 로그인</TextDivider>
      <LoginButtonBox>
        <SocialLoginButton src={kakaoLoginButton} />
        <SocialLoginButton src={naverLoginButton} />
      </LoginButtonBox>
    </Container>
  )
};

export default SocialLogin;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: space-beween;
`

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
    content: '';
  }
`

const LoginButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`

const SocialLoginButton = styled.img`
  width: 45%;
  object-fit: contain;
  &:hover {
    cursor: pointer;
  }
`