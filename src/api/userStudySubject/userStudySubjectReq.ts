import {
  UserStudySubjectGetResponse,
  UserStudySubjectListGetResponse,
  UserStudySubjectPostRequest,
  UserStudySubjectPostResponse,
  UserStudySubjectDeleteResponse,
} from "./types/userStudySubjectAPI";
import RequestCore from "../common/RequestCore";

class UserStudySubjectAPI extends RequestCore {
  public UserStudySubjectPost = async (
    params?: UserStudySubjectPostRequest
  ) => {
    const response = await this.apiRequest<
      UserStudySubjectPostRequest,
      UserStudySubjectPostResponse
    >({
      requestMethod: "POST",
      requestData: params,
      url: "one",
    });

    return response;
  };

  public UserStudySubjectListGet = async () => {
    const response = await this.apiRequest<
      undefined,
      UserStudySubjectListGetResponse
    >({
      requestMethod: "GET",
      url: "list",
    });

    return response;
  };

  public UserStudySubjectGet = async (userStudySubjectId: string) => {
    const response = await this.apiRequest<
      undefined,
      UserStudySubjectGetResponse
    >({
      requestMethod: "GET",
      url: `one/${userStudySubjectId}`,
    });

    return response;
  };

  public UserStudySubjectDelete = async (userStudySubjectId: string) => {
    const response = await this.apiRequest<
      undefined,
      UserStudySubjectDeleteResponse
    >({
      requestMethod: "DELETE",
      url: `one/${userStudySubjectId}`,
    });
    return response;
  };
}

export default UserStudySubjectAPI;
