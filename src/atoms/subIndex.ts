import { atom } from "recoil";

// 슬라이더에서 현재 active한 슬라이드 인덱스 state
const subIndexState = atom({
  key: "subIndexState",
  default: 0,
});

export default subIndexState;
