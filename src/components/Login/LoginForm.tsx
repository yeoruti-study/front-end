import React, { useRef } from 'react';
import Input from '../../common/Input';
//import RememberMeToggle from './RememberMeToggle';
import Button from '../../common/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useGeneralLogin } from '../../hooks/react_query_hooks/useGeneralLogin';
import { LoginFormType } from '../../api/generalLogin/types/generalLoginType';

const EMAIL_REGEXP = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
const validate = ({ username, password }: LoginFormType) => {
  console.log(username, password);
  // 나중엔 경고 문구 모두 모두 하단의 빨간 글씨로 변경 예정
  if (username === '' || password === '') {
      alert('이메일과 비밀번호 모두 입력해야합니다.');
    return false;
  } else if (!EMAIL_REGEXP.test(username)) {
      alert('이메일 형식이 올바르지 않습니다.');
    return false;
  }
  return true;
};

const LoginForm = () => {
  const login = useGeneralLogin();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  let loginform: LoginFormType = { username: '', password: '' };

  const onLogin = () => {
    if (usernameRef.current && passwordRef.current){
      loginform = {
        username: usernameRef.current.value,
        password: passwordRef.current.value
      };
      if (validate(loginform)) {
        login(loginform)
      }
    }
  };

  return (
    <LoginFormContainer>
      <Input id='username' inputRef={usernameRef} placeholder='이메일' />
      <Input id='password' inputRef={passwordRef} type='password' placeholder='비밀번호' />
      {/*
      <RememberMeToggle>
        <RememberMeToggle.ToggleButton />
        <span>&nbsp;자동로그인</span>
        <RememberMeToggle.ToggleState />
      </RememberMeToggle> 
      */}
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
