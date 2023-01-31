import { atom } from "recoil";

// 슬라이더 [과목 추가하기] 에서 과목 이름 state
const newSubState = atom({
  key: "newSubState",
  default: {
    title: "",
  },
});
export default newSubState;
