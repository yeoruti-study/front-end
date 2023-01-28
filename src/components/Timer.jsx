import { createContext, useState, useEffect } from 'react';
import useTimerContext from '../hooks/useTimerContext';
import useCounter from '../hooks/useCounter';
import changeCountToTime from '../utils/changeCountToTime';
import { getTotalTime, setTotalTime } from '../utils/TotalTimeCookieUtils';
import styled from 'styled-components';
  
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
    <TimerContext.Provider value={{ showTotal, setShowTotal, total, addTotal, onGoing, setOnGoing}}>
      { children }
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
      <h2>{total.hour}:{total.min}:{total.sec}</h2>
      : <h2>{time.hour}:{time.min}:{time.sec}</h2>
  );
};

const ToggleButton = () => {
  const { showTotal, setShowTotal } = useTimerContext();
  return (<ToggleButtonWrapper showTotal={showTotal} onClick={() => setShowTotal(!showTotal)}>All</ToggleButtonWrapper>);
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
    <button onClick={onStart}>시작</button>
  );
};

const StopButton = () => {
  const { setOnGoing } = useTimerContext();
  function onStop() { return setOnGoing(false); }
  return (
    <button onClick={onStop}>중지</button>
  );
};

Timer.TimeWindow = TimeWindow;
Timer.ToggleButton = ToggleButton;
Timer.ControlButton = ControlButton;

export default Timer;

const ToggleButtonWrapper = styled.button`
  ${({ showTotal }) => showTotal ? 'background-color: lightgray;' : null }
`