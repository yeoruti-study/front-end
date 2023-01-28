import { useState } from 'react';
import changeCountToTime from '../utils/changeCountToTime';

const initialState = { hour: '00', min: '00', sec: '00', count: 0 };

const useCounter = () => {
  const [time, setTime] = useState(initialState);
  let count = 0;

  const countUp = () => {
    const updatedTime = changeCountToTime(++count);
    setTime(updatedTime);
  };

  const countReset = () => {
    setTime(initialState);
    count = 0;
  };

  return [ time, countUp, countReset ];
};

export default useCounter;