import axios from "axios";
import uriSelector from "../../utils/uriSelector";

const studyRoomApiClient = axios.create();

studyRoomApiClient.defaults.baseURL = uriSelector();
studyRoomApiClient.defaults.withCredentials = true;

export default studyRoomApiClient;
