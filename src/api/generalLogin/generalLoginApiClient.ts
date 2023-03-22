import axios from "axios";
import uriSelector from "../../utils/uriSelector";
const generalLoginApiClient = axios.create();

generalLoginApiClient.defaults.baseURL = uriSelector();
generalLoginApiClient.defaults.withCredentials = true;


export default generalLoginApiClient;
