import axios from "axios";
import uriSelector from "../../utils/uriSelector";

const logoutApiClient = axios.create();
logoutApiClient.defaults.baseURL = uriSelector();
logoutApiClient.defaults.withCredentials = true;
export default logoutApiClient;
