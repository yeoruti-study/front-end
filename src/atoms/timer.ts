import { atom, DefaultValue, selector } from "recoil";

export const timerOnGoingAtom = atom({
  key: "timerOnGoingSelector",
  default: false,
});

export const timerSubjectAtom = atom({
  key: "timerSubject",
  default: {
    id: "",
    title: "",
  },
});

export const timerIdAtom = atom({
  key: "timerId",
  default: "",
});

type TimerType = {
  onGoing: boolean;
  timerSubject: {
    id: string;
    title: string;
  };
};
const timerSelector = selector({
  key: "timerAtom",
  get: ({ get }) => {
    const onGoing = get(timerOnGoingAtom);
    const timerSubject = get(timerSubjectAtom);
    return {
      onGoing,
      timerSubject,
    };
  },
});

export default timerSelector;
