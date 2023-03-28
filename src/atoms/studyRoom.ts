import { atom } from "recoil";

type StudyRoomStateType =
  | "home"
  | "attendance"
  | "rank"
  | "chat"
  | "invite"
  | "settings";

const studyRoomState = atom<StudyRoomStateType>({
  key: "StudyRoomAtom",
  default: "home",
});

export default studyRoomState;
