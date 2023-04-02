import generalLoginApiClient from "./generalLoginApiClient";
import GeneralLoginAPI from "./generalLoginReq";

const generalLoginRequest = new GeneralLoginAPI(
  generalLoginApiClient,
  ""
);

export default generalLoginRequest;
