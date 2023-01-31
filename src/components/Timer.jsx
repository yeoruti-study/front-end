import { createContext, useState, useEffect } from 'react';
import useTimerContext from '../hooks/useTimerContext';
import useCounter from '../hooks/useCounter';
import changeCountToTime from '../utils/changeCountToTime';
import { getCookie, setCookie } from '../utils/cookieUtils';
import formatDate from '../utils/formatDate';
import styled from 'styled-components';
import { ReactComponent as Start } from '../assets/icons/start-timer-button.svg';
import { ReactComponent as Stop } from '../assets/icons/stop-timer-button.svg';
import COLOR from '../style/color';
  
export const TimerContext = createContext();

const Timer = ({ children }) => {
  const [showTotal, setShowTotal] = useState(true);
  const [total, setTotal] = useState({ hour: '00', min: '00', sec: '00', count:0 });
  const [onGoing, setOnGoing] = useState(false);

  useEffect(() => {
    const totalTimeCookie = parseInt(getCookie('totalTime'));
    if (totalTimeCookie) {
      const recentDateCookie = getCookie('recentDate');
      if (recentDateCookie === formatDate(new Date())) setTotal(changeCountToTime(totalTimeCookie));
      else {
        console.log(recentDateCookie, formatDate(new Date()));
        setCookie('totalTime', 0, 3);
        setCookie('recentDate', formatDate(new Date()), 3);
      }
    };
  }, []);

  const addTotal = (count) => {
    setTotal(total => (changeCountToTime(total.count + count)));
  };

  useEffect(() => {
    setCookie('totalTime', total.count, 3);
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

  const onToggle = () => setShowTotal(!showTotal);

  return (<ToggleInputWrapper>
    <ToggleInput type='radio' id='total' name='showToggle' onChange={onToggle} checked={showTotal} />
    <label htmlFor='total'>일일 학습량</label>
    <ToggleInput type='radio' id='timer' name='showToggle' onChange={onToggle} checked={!showTotal} />
    <label htmlFor='timer'>현재 진행량</label>    
  </ToggleInputWrapper>);
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
  const {setShowTotal, setOnGoing} = useTimerContext();
  function onStart() {
    setShowTotal(false);
    return setOnGoing(true);
  }
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
  margin: 1rem;
  font-size: 2rem;
  font-weight: 900;
`

const ToggleInputWrapper = styled.div`
  display: flex;
  margin: 0.5rem auto;
`

const ToggleInput = styled.input`
  display: none;
  &+label {
    margin: 0 1rem;
    padding: 0.5rem 2.5rem;
    border: 2px solid ${COLOR.MAIN};
    border-radius: 5px;
    color: ${COLOR.MAIN};
    &:hover {
      cursor: pointer;
    }
    &:active {
      cursor: default;
    }
  }
  &:checked+label {
    background-color: ${COLOR.MAIN};
    color: white;
    box-shadow: 0 0 8px ${COLOR.SUB};
  }
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