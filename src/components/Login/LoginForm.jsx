import Input from '../../common/Input';
import RememberMeToggle from './RememberMeToggle';
import Button from '../../common/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginForm = () => {
  const onLogin = () => { /* 로그인 버튼 클릭시 처리로직 */ };
  
  return (
    <LoginFormContainer>
      <Input placeholder='이메일' />
      <Input type='password' placeholder='비밀번호' />
      <RememberMeToggle>
        <RememberMeToggle.ToggleButton />
        <span>&nbsp;자동로그인</span>
        <RememberMeToggle.ToggleState />
      </RememberMeToggle>
      <Button primary onClick={onLogin}>로그인</Button>
      <LinkBox>
        {/* 페이지 완성되면 추후에 연결 */}
        <Link to='/' >아이디 찾기</Link>
        <Link to='/' >비밀번호 찾기</Link>
        <Link to='/' >회원가입 하기</Link>
      </LinkBox>
    </LoginFormContainer>
  );
};

export default LoginForm;

const LoginFormContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1.5;
  flex-direction: column;
  & div {
    margin-bottom : 1rem;
  }
`

const LinkBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  & a{
    padding: 0 2rem;
    color: black;
    text-decoration: none;
  }
  & a:nth-child(2){
    border-right: 1px solid gray;
    border-left: 1px solid gray;
  }
`
