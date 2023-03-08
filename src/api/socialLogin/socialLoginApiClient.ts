import axios from "axios";
import uriSelector from "../../utils/uriSelector";
const socialLoginApiClient = axios.create();

socialLoginApiClient.defaults.baseURL = uriSelector();
socialLoginApiClient.defaults.withCredentials = true;

export default socialLoginApiClient;
