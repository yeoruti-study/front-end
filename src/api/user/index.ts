import axiosClient from "../common/axiosClient";
import UserAPI from "./userReq";

const userRequest = new UserAPI(axiosClient, "/user");

export default userRequest;
