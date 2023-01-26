import logo from "../assets/logo_light.png";
import LoginForm from "../components/Login/LoginForm";
import SocialLogin from "../components/Login/SocialLogin";
import styled from "styled-components";

const Login = () => {
  return (
    <LoginContainer>
      <LogoWrapper>
        <LogoImage src={logo} />
      </LogoWrapper>
      <LoginForm />
      <SocialLogin />
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  width: 500px;
  height: 100%;
  margin: auto;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const LogoWrapper = styled.div`
  flex: 1;
`;

const LogoImage = styled.img`
  height: 15rem;
  marginbottom: 0.5rem;
`;
