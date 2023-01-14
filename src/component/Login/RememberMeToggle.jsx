import { useState, createContext } from 'react';
import useToggle from '../../hook/useToggle';
import styled from 'styled-components';
import COLOR from '../../style/color';

export const ToggleContext = createContext();

const RememberMeToggle = ({ children }) => {
  const [on, setOn] = useState();
  const toggle = () => setOn(!on);
  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      <ToggleWrapper>
        {children}
      </ToggleWrapper>
  </ToggleContext.Provider>);
};

const ToggleState = () => {
  const { on } = useToggle();
  return <ToggleStateBox on={on|false}>&nbsp;{on ? 'ON' : 'OFF'}</ToggleStateBox>
}

const ToggleButton = () => {
  const { on, toggle } = useToggle();
  return (
    <ToggleButtonContainer>
      <ToggleInput type='checkbox' checked={on|false} onChange={toggle} />
      <ToggleSlider></ToggleSlider>
    </ToggleButtonContainer>);
};

RememberMeToggle.ToggleState = ToggleState;
RememberMeToggle.ToggleButton = ToggleButton;

export default RememberMeToggle;

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`

const ToggleStateBox = styled.span`
  ${({ on }) => on? `color: ${COLOR.MAIN};` : `color: lightgray;` }
  font-weight: bold;
`

const ToggleButtonContainer = styled.label`
  display: inline-block;
  position: relative;
  width: 2.6rem;
  height: 1.5rem;
`
const ToggleInput = styled.input`
  width: 0;
  height: 0;
  opacity: 0;
  &:checked + span{
    background-color: ${COLOR.MAIN};
  }
  &:checked + span::before{
    transform: translateX(1.1rem);
  }
`

const ToggleSlider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 1.7rem;
  background-color: lightgray;
  transition: .4s;
  cursor: pointer;
  &::before{
    position: absolute;
    left: 0.2rem;
    bottom: 0.2rem;
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 50%;
    background-color: white;
    content: "";
    transition: .4s;
  }

`