import axios from "axios";
import uriSelector from "../../utils/uriSelector";
const roomUserApiClient = axios.create();

roomUserApiClient.defaults.baseURL = uriSelector();
roomUserApiClient.defaults.withCredentials = true;
export default roomUserApiClient;
