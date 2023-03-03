import { atom } from "recoil";

const goalState = atom({
  key: "goalState",
  default: {
    title: '',
    detail: '',
    goalTime: 'PT00H00M',
    startDate: new Date(),
    endDate: new Date(),
    userId: '05637e09-0ce5-40a9-ab7f-08f792fe56dc',
    userStudySubjectId: '',
  },
});

export default goalState;
