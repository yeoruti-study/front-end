import React from 'react';
import { TimerContext } from '../components/Timer';

const useTimerContext = () => {
  const context = React.useContext(TimerContext);
  if (context === undefined) throw new Error('useTimer must be used within a <Timer />');
  return context;
}

export default useTimerContext;