import studyRoomApiClient from "./studyRoomApiClient";
import StudyRoomAPI from "./studyRoomReq";

const studyRoomRequest = new StudyRoomAPI(studyRoomApiClient, "/study-room/");

export default studyRoomRequest;
