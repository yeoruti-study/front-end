import axios from "axios";
import uriSelector from "../../utils/uriSelector";

const studyRoomApiClient = axios.create();

studyRoomApiClient.defaults.baseURL = uriSelector();

export default studyRoomApiClient;
