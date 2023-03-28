import userStudySubjectApiClient from "./userStudySubjectApiClient";
import UserStudySubjectAPI from "./userStudySubjectReq";

const userStudySubjectRequest = new UserStudySubjectAPI(
  userStudySubjectApiClient,
  "/user-study-subject/"
);

export default userStudySubjectRequest;
