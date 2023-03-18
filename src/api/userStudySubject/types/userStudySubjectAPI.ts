import { UserStudySubjectType } from "./userStudySubjectType";

interface DefaultResultRes {
  data?: object;
  status: string;
  message: string;
  memo?: string;
}

export interface UserStudySubjectPostRequest {
  title: string;
}
export interface UserStudySubjectPostResponse extends DefaultResultRes {}

export interface UserStudySubjectListGetResponse extends DefaultResultRes {
  data: UserStudySubjectType[];
}

export interface UserStudySubjectGetResponse extends DefaultResultRes {
  data: UserStudySubjectType;
}

export interface UserStudySubjectDeleteResponse extends DefaultResultRes {}
