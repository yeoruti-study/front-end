import { StudyRoomType } from "./../../studyRoom/types/studyRoomType";
import { RoomUserType } from "./roomUserType";
interface DefaultResultRes {
  data?: object;
  status: string;
  message: string;
  memo?: string;
}

export interface RoomUserPostRequest {
  userId: string;
  studyRoomId: string;
}

export interface RoomUserPostResponse extends DefaultResultRes {}

// roomUserDeleteRequest 추가 파라미터 없음
export interface roomUserDeleteResponse extends DefaultResultRes {}

// export interface roomUserAllGetRequest
export interface roomUserAllGetResponse extends DefaultResultRes {
  data: RoomUserType[];
}

export interface roomUserStudyRoomGetResponse extends DefaultResultRes {
  data: StudyRoomType[];
}
