import {
  UserPostRequest,
  UserPostResponse,
  UserProfileGetResponse,
  UserProfilePutReqeust,
  UserProfilePutResponse,
  UserDeleteRequest,
  UserDeleteResponse,
  UserAllGetResponse,
  UserGetWithIDResponse,
} from "./types/userAPI";
import RequestCore from "../common/RequestCore";

class UserAPI extends RequestCore {
  public UserPost = async (params?: UserPostRequest) => {
    const response = await this.apiRequest<UserPostRequest, UserPostResponse>({
      requestMethod: "POST",
      requestData: params,
      url: "/one",
    });

    return response;
  };

  public UserProfileGet = async () => {
    const response = await this.apiRequest<undefined, UserProfileGetResponse>({
      requestMethod: "GET",
      url: "/one",
    });

    return response;
  };

  public UserProfilePut = async (params?: UserProfilePutReqeust) => {
    const response = await this.apiRequest<
      UserProfilePutReqeust,
      UserProfilePutResponse
    >({
      requestMethod: "PUT",
      requestData: params,
      url: "/profile/one",
    });

    return response;
  };

  public UserDelete = async (params?: UserDeleteRequest) => {
    const response = await this.apiRequest<
      UserDeleteRequest,
      UserDeleteResponse
    >({
      requestMethod: "DELETE",
      requestData: params,
      url: "/user/one",
    });

    return response;
  };

  public UserAllGet = async () => {
    const response = await this.apiRequest<undefined, UserAllGetResponse>({
      requestMethod: "GET",
      url: "/all",
    });

    return response;
  };

  public UserGetWithID = async (userId: string) => {
    const response = await this.apiRequest<undefined, UserGetWithIDResponse>({
      requestMethod: "GET",
      url: `/one/${userId}`,
    });

    return response;
  };
}

export default UserAPI;
