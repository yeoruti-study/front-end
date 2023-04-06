import { StudyRoomType } from "./studyRoomType";

interface DefaultResultRes {
  data?: object;
  status: string;
  message: string;
  memo?: string;
}

export interface StudyRoomPostRequest {
  name: string;
  studyCategoryId: string;
  maximumNumberOfPeople?: number;
  studyGoalTime?: string;
  roomPassword?: string;
  hasRoomPassword: boolean;
}

export interface StudyRoomPostResponse extends DefaultResultRes {}

// StudyRoomAll request none

export interface StudyRoomAllGetResponse extends DefaultResultRes {
  data: StudyRoomType[];
}

export interface StudyRoomPutRequest {
  id: string;
  name: string;
  maximumNumberOfPeople: number;
  studyGoalTime: string;
  masterUserId: string;
}

export interface StudyRoomPutResponse extends DefaultResultRes {}

export interface StudyRoomDeleteRequest {
  studyRoomId: string;
}
export interface StudyRoomDeleteResponse extends DefaultResultRes {}

export interface StudyRoomCategoryGetRequest {
  studyCategoryId: string;
}
export interface StudyRoomCategoryGetResponse extends DefaultResultRes {
  data: StudyRoomType[];
}

export interface StudyRoomPwPatchRequest {
  id: string;
  roomPassword: string;
  userId: string;
}
export interface StudyRoomPwPatchResponse extends DefaultResultRes {}

export interface StudyRoomPwCheckPostRequest {
  id: string;
  roomPassword: string;
}
export interface StudyRoomPwCheckPostResponse extends DefaultResultRes {}
