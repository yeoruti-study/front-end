import {
  StudyRoomPostRequest,
  StudyRoomPostResponse,
  StudyRoomAllGetResponse,
  StudyRoomPutRequest,
  StudyRoomPutResponse,
  StudyRoomDeleteRequest,
  StudyRoomDeleteResponse,
  StudyRoomCategoryGetRequest,
  StudyRoomCategoryGetResponse,
  StudyRoomPwPatchRequest,
  StudyRoomPwCheckPostRequest,
  StudyRoomPwCheckPostResponse,
} from "./types/studyRoomAPI";
import RequestCore from "../common/RequestCore";

class studyRoomAPI extends RequestCore {
  public StudyRoomPost = async (params: StudyRoomPostRequest) => {
    const response = await this.apiRequest<
      StudyRoomPostRequest,
      StudyRoomPostResponse
    >({
      requestMethod: "POST",
      requestData: params,
    });

    return response;
  };

  public StudyRoomAllGet = async () => {
    const response = await this.apiRequest<undefined, StudyRoomAllGetResponse>({
      requestMethod: "GET",
    });

    return response;
  };

  public StudyRoomPut = async (params: StudyRoomPutRequest) => {
    const response = await this.apiRequest<
      StudyRoomPutRequest,
      StudyRoomPutResponse
    >({
      requestMethod: "PUT",
      requestData: params,
    });

    return response;
  };

  public StudyRoomDelete = async (params: StudyRoomDeleteRequest) => {
    const response = await this.apiRequest<
      StudyRoomDeleteRequest,
      StudyRoomDeleteResponse
    >({
      requestMethod: "DELETE",
      requestData: params,
    });

    return response;
  };

  public StudyRoomCategoryGet = async (params: StudyRoomCategoryGetRequest) => {
    const response = await this.apiRequest<
      StudyRoomCategoryGetRequest,
      StudyRoomCategoryGetResponse
    >({
      requestMethod: "GET",
      requestData: params,
    });

    return response;
  };

  public StudyRoomPwPatch = async (params: StudyRoomPwPatchRequest) => {
    const response = await this.apiRequest<
      StudyRoomPwPatchRequest,
      StudyRoomPwPatchRequest
    >({
      requestMethod: "PATCH",
      requestData: params,
    });

    return response;
  };

  public StudyRoomPwCheckPost = async (params: StudyRoomPwCheckPostRequest) => {
    const response = await this.apiRequest<
      StudyRoomPwCheckPostRequest,
      StudyRoomPwCheckPostResponse
    >({
      requestMethod: "POST",
      requestData: params,
    });

    return response;
  };
}

export default StudyRoomPutRequest;
