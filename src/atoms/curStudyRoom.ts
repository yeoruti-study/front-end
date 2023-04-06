import { atom, selector } from "recoil";
import { StudyRoomType } from "../api/studyRoom/types/studyRoomType";

const curStudyRoomAtom = atom<StudyRoomType>({
  key: "CurStudyRoomAtom",
  default: {
    id: "",
    name: "",
    studyCategoryDto: {
      id: "",
      name: "",
      description: "",
    },
    maximumNumberOfPeople: 0,
    studyGoalTime: "",
    hasRoomPassword: false,
    masterUserId: "",
    createdAt: "",
    updatedAt: "",
    masterUserUsername: "",
    masterUserProfileName: "",
  },
});

export const curStudyRoomIdSelector = selector({
  key: "curStudyRoomIdSelector",
  get: ({ get }) => {
    const originState = get(curStudyRoomAtom);
    return originState.id;
  },
});
export default curStudyRoomAtom;
