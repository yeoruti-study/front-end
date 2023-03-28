import {
  RoomUserPostRequest,
  RoomUserPostResponse,
  roomUserDeleteResponse,
  roomUserAllGetResponse,
  roomUserStudyRoomGetResponse,
} from "./types/roomUserAPI";
import RequestCore from "../common/RequestCore";

class RoomUserAPI extends RequestCore {
  public RoomUserPost = async (params?: RoomUserPostRequest) => {
    const response = await this.apiRequest<
      RoomUserPostRequest,
      RoomUserPostResponse
    >({
      requestMethod: "POST",
      requestData: params,
      url: "one",
    });

    return response;
  };

  public RoomUserDelete = async (roomUserId: string) => {
    const response = await this.apiRequest<undefined, roomUserDeleteResponse>({
      requestMethod: "DELETE",
      url: `one/${roomUserId}`,
    });

    return response;
  };

  public RoomUserAllGet = async (studyRoomId: string) => {
    const response = await this.apiRequest<undefined, roomUserAllGetResponse>({
      requestMethod: "GET",
      url: `user/list/study-room/${studyRoomId}`,
    });

    return response;
  };

  public RoomUserStudyRoomGet = async () => {
    const response = await this.apiRequest<
      undefined,
      roomUserStudyRoomGetResponse
    >({
      requestMethod: "GET",
      url: `study-room/list`,
    });

    return response;
  };
}

export default RoomUserAPI;
