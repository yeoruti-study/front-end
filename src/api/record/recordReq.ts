import RequestCore from "../common/RequestCore";
import {
  UserRecordBySubjectGetResponse,
  UserRecordDeleteResponse,
  UserRecordEndPatchRequest,
  UserRecordEndPatchResponse,
  UserRecordListGetResponse,
  UserRecordStartPostRequest,
  UserRecordStartPostResponse,
} from "./types/recordAPI";

class RecordAPI extends RequestCore {
  public UserRecordListGet = async () => {
    const response = await this.apiRequest<
      undefined,
      UserRecordListGetResponse
    >({
      requestMethod: "GET",
      url: "list",
    });

    return response;
  };

  public UserRecordBySubjectGet = async (userStudySubjectId: string) => {
    const response = await this.apiRequest<
      undefined,
      UserRecordBySubjectGetResponse
    >({
      requestMethod: "GET",
      url: `list/user-study-subject/${userStudySubjectId}`,
    });

    return response;
  };

  public UserRecordDelete = async (recordId: string) => {
    const response = await this.apiRequest<undefined, UserRecordDeleteResponse>(
      {
        requestMethod: "DELETE",
        url: `one/${recordId}`,
      }
    );

    return response;
  };

  public UserRecordStartPost = async (params?: UserRecordStartPostRequest) => {
    const response = await this.apiRequest<
      UserRecordStartPostRequest,
      UserRecordStartPostResponse
    >({
      requestMethod: "POST",
      requestData: params,
      url: "one",
    });

    return response;
  };

  public UserRecordEndPatch = async (params?: UserRecordEndPatchRequest) => {
    const response = await this.apiRequest<
      UserRecordEndPatchRequest,
      UserRecordEndPatchResponse
    >({
      requestMethod: "PATCH",
      requestData: params,
      url: "one",
    });

    return response;
  };
}

export default RecordAPI;
