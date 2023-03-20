import axios from "axios";
import uriSelector from "../../utils/uriSelector";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = uriSelector();
axiosClient.defaults.withCredentials = true;

export default axiosClient;
