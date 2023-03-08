import {
  SocialLoginKakaoRequest,
  SocailLoginKakaoResponse,
  SocialLoginNaverRequest,
  SocialLoginNaverResponse,
  SocialLoginPostResponse,
  SocialLoginPostRequest,
} from "./types/socialLoginAPI";
import RequestCore from "../common/RequestCore";

class SocailLoginAPI extends RequestCore {
  public SocialLoginPost = async (params?: SocialLoginPostRequest) => {
    const response = await this.apiRequest<
      SocialLoginPostRequest,
      SocialLoginPostResponse
    >({
      requestMethod: "POST",
      requestData: params,
      url: "",
    });

    return response;
  };
  public SocialLoginKakao = async (params?: SocialLoginKakaoRequest) => {
    const response = await this.apiRequest<
      SocialLoginKakaoRequest,
      SocailLoginKakaoResponse
    >({
      requestMethod: "POST",
      requestData: params,
      url: "",
    });

    return response;
  };

  public SocialLoginNaver = async (params?: SocialLoginNaverRequest) => {
    const response = await this.apiRequest<
      SocialLoginNaverRequest,
      SocialLoginNaverResponse
    >({
      requestMethod: "POST",
      requestData: params,
      url: "",
    });

    return response;
  };
}

export default SocailLoginAPI;
