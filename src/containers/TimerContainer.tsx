import Timer from "../components/Timer";
import styled from "styled-components";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { timerOnGoingAtom } from "../atoms/timer";
import {
  useUserRecordEndPatch,
  useUserRecordListGet,
  useUserRecordStartPost,
} from "../hooks/react_query_hooks/useRecord";
import localConsole from "../utils/localConsole";

const TimerContainer = () => {
  const onGoing = useRecoilValue(timerOnGoingAtom);

  useEffect(() => {
    const preventClose = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };

    if (onGoing) window.addEventListener("beforeunload", preventClose);

    return () => {
      window.removeEventListener("beforeunload", preventClose);
    };
  }, []);

  const onStart = useUserRecordStartPost();
  const onEnd = useUserRecordEndPatch();
  return (
    <Timer>
      <TimerControlBox>
        <Timer.TimeWindow />
        <Timer.ControlButton onStart={onStart} onEnd={onEnd} />
      </TimerControlBox>
      <Timer.ToggleButton />
    </Timer>
  );
};

export default TimerContainer;

const TimerControlBox = styled.div`
  display: flex;
  align-items: center;
`;
