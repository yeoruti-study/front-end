import styled from 'styled-components';
import COLOR from '../style/color';

const Button = ({width='100%', primary=true, children, ...res}) => {
  return <ButtonWrapper width={width} primary={primary}  {...res}>{children}</ButtonWrapper>
}

export default Button;

const ButtonWrapper = styled.button`
  ${({width})=>`width: ${width};`}
  padding: 8px 16px;
  border: 2px solid ${COLOR.MAIN};
  border-radius: 5px;
  ${({ primary }) => primary ?
  `background-color: ${COLOR.MAIN}; color: white;`
  : `background-color: white; color: ${COLOR.MAIN};`}
  font-size: 20px;
  ${({ disabled }) => disabled ?
  `opacity: 0.4; &:hover{cursor: default;}`
  : `&:active{ background-color: ${COLOR.DARKMAIN}; color: gray; cursor: default;`}
`