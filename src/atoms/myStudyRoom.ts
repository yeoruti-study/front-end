import { atom, selector } from "recoil";
const myStudyRoomSetAtom = atom<Set<string>>({
  key: "MyStudyRoomSetAtom",
  default: new Set<string>(),
});

export const myStudyRoomArraySelector = selector({
  key: "MyStudyRoomArray",
  get: ({ get }) => {
    const originState = get(myStudyRoomSetAtom);
    return Array.from(originState);
  },
});
export default myStudyRoomSetAtom;
