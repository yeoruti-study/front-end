import axios from "axios";
import uriSelector from "../../utils/uriSelector";

const studyCategoryApiClient = axios.create();

studyCategoryApiClient.defaults.baseURL = uriSelector();
studyCategoryApiClient.defaults.withCredentials = true;

export default studyCategoryApiClient;
