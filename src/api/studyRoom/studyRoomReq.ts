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

class StudyRoomAPI extends RequestCore {
  public StudyRoomPost = async (params?: StudyRoomPostRequest) => {
    const response = await this.apiRequest<
      StudyRoomPostRequest,
      StudyRoomPostResponse
    >({
      requestMethod: "POST",
      requestData: params,
      url: 'one'
    });

    return response;
  };

  public StudyRoomAllGet = async () => {
    const response = await this.apiRequest<undefined, StudyRoomAllGetResponse>({
      requestMethod: "GET",
      url: 'all'
    });

    return response;
  };

  public StudyRoomPut = async (params?: StudyRoomPutRequest) => {
    const response = await this.apiRequest<
      StudyRoomPutRequest,
      StudyRoomPutResponse
    >({
      requestMethod: "PUT",
      requestData: params,
      url: 'one'
    });

    return response;
  };

  // TODO: api uri에 맞게 수정 필요
  public StudyRoomDelete = async (params?: StudyRoomDeleteRequest) => {
    const response = await this.apiRequest<
      StudyRoomDeleteRequest,
      StudyRoomDeleteResponse
    >({
      requestMethod: "DELETE",
      requestData: params,
      url: 'one/'
    });

    return response;
  };

  public StudyRoomCategoryGet = async (
    params?: StudyRoomCategoryGetRequest
  ) => {
    const response = await this.apiRequest<
      StudyRoomCategoryGetRequest,
      StudyRoomCategoryGetResponse
    >({
      requestMethod: "GET",
      requestData: params,
      url: 'list/study-category/'
    });

    return response;
  };

  public StudyRoomPwPatch = async (params?: StudyRoomPwPatchRequest) => {
    const response = await this.apiRequest<
      StudyRoomPwPatchRequest,
      StudyRoomPwPatchRequest
    >({
      requestMethod: "PATCH",
      requestData: params,
      url: 'room-password',
    });

    return response;
  };

  public StudyRoomPwCheckPost = async (
    params?: StudyRoomPwCheckPostRequest
  ) => {
    const response = await this.apiRequest<
      StudyRoomPwCheckPostRequest,
      StudyRoomPwCheckPostResponse
    >({
      requestMethod: "POST",
      requestData: params,
      url: 'room-password/check',
    });

    return response;
  };
}

export default StudyRoomAPI;
