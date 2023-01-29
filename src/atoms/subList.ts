import { atom } from "recoil";

// 슬라이더에서 과목 리스트 state
const subListState = atom({
  key: "subListState",
  default: [{ id: "default", title: "과목 추가하기" }],
});
export default subListState;
