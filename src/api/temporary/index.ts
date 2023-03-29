import axiosClient from "../common/axiosClient";
import logoutApiClient from "./logoutApiClient";
import LogoutAPI from "./logoutReq";

const logoutRequest = new LogoutAPI(logoutApiClient, "");

export default logoutRequest;
