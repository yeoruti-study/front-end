import axiosClient from "../common/axiosClient";
import LogoutAPI from "./logoutReq";

const logoutRequest = new LogoutAPI(axiosClient, "");

export default logoutRequest;
