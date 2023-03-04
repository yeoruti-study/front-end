import axios from "axios";
import uriSelector from "../../utils/uriSelector";
const roomUserApiClient = axios.create();

roomUserApiClient.defaults.baseURL = uriSelector();

export default roomUserApiClient;
