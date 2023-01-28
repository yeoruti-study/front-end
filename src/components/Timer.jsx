import { createContext, useState, useEffect } from 'react';
import useTimerContext from '../hooks/useTimerContext';
import useCounter from '../hooks/useCounter';
import changeCountToTime from '../utils/changeCountToTime';
import { getTotalTime, setTotalTime } from '../utils/TotalTimeCookieUtils';
import styled from 'styled-components';
import { ReactComponent as Start } from '../assets/icons/start-timer-button.svg';
import { ReactComponent as Stop } from '../assets/icons/stop-timer-button.svg';
import Button from '../common/Button';
import COLOR from '../style/color';
  
export const TimerContext = createContext();

const Timer = ({ children }) => {
  const [showTotal, setShowTotal] = useState(false);
  const [total, setTotal] = useState({ hour: '00', min: '00', sec: '00', count:0 });
  const [onGoing, setOnGoing] = useState(false);

  useEffect(() => {
    const cookie = getTotalTime();
    if (cookie) setTotal(changeCountToTime(cookie));
  }, []);

  const addTotal = (count) => {
    setTotal(total => (changeCountToTime(total.count + count)));
  };

  useEffect(() => {
    setTotalTime(total.count);
  }, [total])

  return (
    <TimerContext.Provider value={{ showTotal, setShowTotal, total, addTotal, onGoing, setOnGoing }}>
      <TimerWrapper>
        {children}
      </TimerWrapper>
    </TimerContext.Provider>
  );
};

const TimeWindow = () => {
  const { showTotal, total, addTotal, onGoing } = useTimerContext();
  const [time, countUp, countReset] = useCounter();

  let timer;

  useEffect(() => {
    if (onGoing) {
      timer = setInterval(() => countUp(), 1000);
    } else {
      addTotal(time.count);
      time.count&&alert(`${time.hour}시간 ${time.min}분 ${time.sec}초의 집중력을 보여주셨습니다!`);
      countReset();
    }
    return () => {
      clearInterval(timer);
    };
  }, [onGoing]);

  return (
    showTotal ?
      <TimeWindowWrapper>{total.hour} : {total.min} : {total.sec}</TimeWindowWrapper>
      : <TimeWindowWrapper>{time.hour} : {time.min} : {time.sec}</TimeWindowWrapper>
  );
};

const ToggleButton = () => {
  const { showTotal, setShowTotal } = useTimerContext();
  return (<Button primary={showTotal} onClick={() => setShowTotal(!showTotal)}>All</Button>);
};

const ControlButton = () => {
  const { onGoing } = useTimerContext();
  return (
    onGoing ?
      <StopButton />
      : <StartButton />
  );
};

const StartButton = () => {
  const {setOnGoing} = useTimerContext();
  function onStart() { return setOnGoing(true); }
  return (
    <StartButtonWrapper onClick={onStart} style={{ width: '2rem', height: '2rem'}}>시작</StartButtonWrapper>
  );
};

const StopButton = () => {
  const { setOnGoing } = useTimerContext();
  function onStop() { return setOnGoing(false); }
  return (
    <StopButtonWrapper onClick={onStop} style={{width: '2rem', height: '2rem'}}>중지</StopButtonWrapper>
  );
};

Timer.TimeWindow = TimeWindow;
Timer.ToggleButton = ToggleButton;
Timer.ControlButton = ControlButton;

export default Timer;

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TimeWindowWrapper = styled.div`
  font-size: 2rem;
  font-weight: 900;
  margin: 1rem;
`

const StartButtonWrapper = styled(Start)`
  width: 2rem;
  height: 2rem;
  fill: ${COLOR.MAIN};
  &:hover {
    cursor: pointer;
  }
  &:active {
    cursor: default;
  }
`

const StopButtonWrapper = styled(Stop)`
  width: 2rem;
  height: 2rem;
  fill: ${COLOR.SUB};
  &:hover {
    cursor: pointer;
  }
  &:active {
    cursor: default;
  }
`