import axiosClient from "../common/axiosClient";
import RecordAPI from "./recordReq";

const recordRequest = new RecordAPI(axiosClient, "/record/");

export default recordRequest;
