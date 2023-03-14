import socialLoginApiClient from "./socialLoginApiClient";
import SocailLoginAPI from "./socialLoginReq";

const socialLoginRequest = new SocailLoginAPI(
  socialLoginApiClient,
  "/social-login"
);

export default socialLoginRequest;
