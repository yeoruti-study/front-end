import Timer from '../components/Timer';
import styled from 'styled-components';

const TimerContainer = () => {
  return <Timer>
    <TimerControlBox>
      <Timer.TimeWindow />
      <Timer.ControlButton />
    </TimerControlBox>
    <Timer.ToggleButton />
  </Timer>
};

export default TimerContainer;

const TimerControlBox = styled.div`
  display: flex;
  align-items: center;
`