import RequestCore from "../common/RequestCore";
import {
  GeneralLoginPostRequest,
  GeneralLoginPostResponse,
  GeneralLogoutGetResponse
} from "./types/generalLoginAPI";

class GeneralLoginAPI extends RequestCore{
  public GeneralLoginPost = async (params?: GeneralLoginPostRequest) => {
    const response = await this.apiRequest<
      GeneralLoginPostRequest,
      GeneralLoginPostResponse
    >({
      requestMethod: "POST",
      requestData: params,
      url: "/login",
    });
  return response;
  }

  public GeneralLogoutGet = async () => {
    const response = await this.apiRequest<
      undefined,
      GeneralLogoutGetResponse
    >({
      requestMethod: "GET",
      url: "/logout",
    });
    return response;
  }
};

export default GeneralLoginAPI;