import {
  StudyCategoryPostRequest,
  StudyCategoryPostResponse,
  StudyCategoryAllGetResponse,
  StudyCategoryPutRequest,
  StudyCategoryPutResponse,
  StudyCategoryDeleteResponse,
} from "./types/studyCategoryAPI";
import RequestCore from "../common/RequestCore";

class StudyCategoryAPI extends RequestCore {
  public StudyCategoryPost = async (params?: StudyCategoryPostRequest) => {
    const response = await this.apiRequest<
      StudyCategoryPostRequest,
      StudyCategoryPostResponse
    >({
      requestMethod: "POST",
      requestData: params,
      url: "/one",
    });

    return response;
  };

  public StudyCategoryAllGet = async () => {
    const response = await this.apiRequest<
      undefined,
      StudyCategoryAllGetResponse
    >({
      requestMethod: "GET",
      url: "/all",
    });

    return response;
  };

  public StudyCategoryPut = async (params?: StudyCategoryPutRequest) => {
    const response = await this.apiRequest<
      StudyCategoryPutRequest,
      StudyCategoryPutResponse
    >({
      requestMethod: "PUT",
      requestData: params,
      url: "/one",
    });

    return response;
  };

  public StudyCategoryDelete = async (studyCategoryId: string) => {
    const response = await this.apiRequest<
      undefined,
      StudyCategoryDeleteResponse
    >({
      requestMethod: "DELETE",
      url: `/one/${studyCategoryId}`,
    });

    return response;
  };
}

export default StudyCategoryAPI;
