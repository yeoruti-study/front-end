import styled from 'styled-components';
import COLOR from '../style/color';

const Button = ({width='100%', children, ...res}) => {
  return <ButtonWrapper width={width} {...res}>{children}</ButtonWrapper>
}

export default Button;

const ButtonWrapper = styled.button`
  ${({width})=>`width: ${width};`}
  padding: 8px 16px;
  border: 0;
  border-radius: 5px;
  background-color: ${COLOR.MAIN};
  font-size: 20px;
  color: white;
  ${({ disabled }) => disabled ?
  `opacity: 0.4; cursor: default;`
  : `&:active{ background-color: ${COLOR.DARKMAIN}; color: gray; cursor: default;`}
`