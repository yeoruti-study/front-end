import axios from "axios";
import studyRoomUriSelector from "./studyRoomUriSelector";

const studyRoomApiClient = axios.create();

studyRoomApiClient.defaults.baseURL = studyRoomUriSelector();

export default studyRoomApiClient;
