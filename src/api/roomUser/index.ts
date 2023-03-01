import roomUserApiClient from "./roomUserApiClient";
import RoomUserAPI from "./roomUserReq";

const roomUserRequest = new RoomUserAPI(roomUserApiClient, "/room-user/");

export default roomUserRequest;
