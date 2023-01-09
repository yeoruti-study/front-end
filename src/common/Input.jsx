import styled from 'styled-components';

// 추후 사용할 색상(팔레트) 정의
const COLOR = {
  MAIN: '#B4D9A9',
  SUB: '#D5D9C4',
};

const Input = ({ width='auto', onReset=null,  ...res }) => {
  return (
    <InputWrapper width={width}>
      <InputBox {...res} adPadding={onReset} />
      {onReset && <RemoveIcon onClick={onReset}>&times;</RemoveIcon>}
    </InputWrapper>);
};

export default Input;

const InputWrapper = styled.div`
  display: block;
  position: relative;
  ${({ width }) => width ? `width: ${width}` : null}; 
  padding: 8px 16px;
  border: 2px solid ${COLOR.MAIN};
  border-radius: 5px;
  transition: all 0.2s;
  &:focus-within{
    box-shadow: 0 0 8px ${COLOR.SUB};
  }
`

const InputBox = styled.input`
  display: inline-block;
  width: 100%;
  border: 0;
  padding: 0;
  ${({ adPadding })=>adPadding&&`padding-right: 0.6rem`};
  font-size: 1rem;
`

const RemoveIcon = styled.span`
  display: inline-block;
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`