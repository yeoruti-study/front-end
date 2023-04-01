import axios from "axios";
import uriSelector from "../../utils/uriSelector";

const studyGoalApiClient = axios.create();

studyGoalApiClient.defaults.baseURL = uriSelector();
studyGoalApiClient.defaults.withCredentials = true;

export default studyGoalApiClient;
