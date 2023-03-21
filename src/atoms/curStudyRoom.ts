import { atom } from "recoil";
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
    roomPassword: "",
    masterUserId: "",
    createdAt: "",
    updatedAt: "",
    masterUserUsername: "",
    masterUserProfileName: "",
  },
});

export default curStudyRoomAtom;
