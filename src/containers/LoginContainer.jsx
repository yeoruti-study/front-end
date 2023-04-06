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
  height: 700px;
  margin: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center ;
`;

const LogoWrapper = styled.div`
  flex: 1;
`;

const LogoImage = styled.img`
  height: 15rem;
  margin-bottom: 0.5rem;
`;
