import Timer from '../components/Timer';

const TimerContainer = () => {
  return <Timer>
    <Timer.TimeWindow />
    <Timer.ToggleButton />
    <Timer.ControlButton />
  </Timer>
};

export default TimerContainer;