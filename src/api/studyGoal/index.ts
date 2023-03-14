import studyGoalApiClient from "./studyGoalApiClient";
import studyGoalAPI from "./studyGoalReq";

const studyGoalRequest = new studyGoalAPI(studyGoalApiClient, "study-goal/");

export default studyGoalRequest;
