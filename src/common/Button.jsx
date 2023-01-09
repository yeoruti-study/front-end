import styled from 'styled-components';

// 추후 사용할 색상(팔레트) 정의
const COLOR = {
  MAIN: '#B4D9A9',
  SUB: '#D5D9C4',
  DARKMAIN: '#94B58B',  // 버튼 active 시에 사용
};

const Button = ({width='100%', children, ...res}) => {
  return <ButtonWrapper width={width} {...res}>{children}</ButtonWrapper>
}

export default Button;

const ButtonWrapper = styled.button`
  font-size: 20px;
  padding: 8px 16px;
  border: 0;
  border-radius: 5px;
  background-color: ${COLOR.MAIN};
  color: white;
  ${({width})=>`width: ${width};`}
  ${({ disabled }) => disabled ?
  `opacity: 0.4; cursor: default;`
  : `&:active{ background-color: ${COLOR.DARKMAIN}; color: gray; cursor: default;`}
`