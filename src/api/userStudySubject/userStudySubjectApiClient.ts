import axios from "axios";
import uriSelector from "../../utils/uriSelector";
const userStudySubjectApiClient = axios.create();

userStudySubjectApiClient.defaults.baseURL = uriSelector();

export default userStudySubjectApiClient;
