import { StudyGoalType } from "./studyGoalType";

interface DefaultResultRes {
  data?: object;
  status: string;
  message: string;
  memo?: string;
}

export interface StudyGoalPostRequest {
  title: string,
  detail : string,
  goalTime : string,
  startDate : Date,
  endDate : Date,
  userStudySubjectId : string,
}

export interface StudyGoalPostResponse extends DefaultResultRes {}

export interface StudyGoalAllGetRequest {
  userId: string;
}

export interface StudyGoalAllGetResponse extends DefaultResultRes {
  data: StudyGoalType[];
}

/* 현재 스터디 목표에 대한 PUT 연산 없음
export interface StudyGoalPutRequest {
  id: string,
  title: string,
  detail : string,
  goalTime : string,
  startDate : Date,
  endDate : Date,
  userId : string,
  userStudySubjectId : string,
}

export interface StudyGoalPutResponse extends DefaultResultRes {}
*/

export interface StudyGoalDeleteRequest {
  studyGoalId: string;
}
export interface StudyGoalDeleteResponse extends DefaultResultRes {}

export interface StudyGoalOneGetRequest {
  studyCategoryId: string;
}
export interface StudyGoalOneGetResponse extends DefaultResultRes {
  data: StudyGoalType;
}

export interface StudyGoalByUserSujectGetRequest {
  userStudySubjectId: string;
}
export interface StudyGoalByUserSubjectGetResponse extends DefaultResultRes {
  data: StudyGoalType[];
}