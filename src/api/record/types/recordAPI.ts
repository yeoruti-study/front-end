interface DefaultResultRes {
  data?: object;
  status: string;
  message: string;
  memo?: string;
}

export type UserRecord = {
  id: string;
  startTime: string;
  endTime: string;
  userStudySubjectId: string;
  totalStudyTime: string;
  studying: boolean;
};
export interface UserRecordListGetResponse extends DefaultResultRes {
  data: UserRecord[];
}

export interface UserRecordBySubjectGetResponse extends DefaultResultRes {
  data: UserRecord[];
}

export interface UserRecordDeleteResponse extends DefaultResultRes {}

export interface UserRecordStartPostRequest {
  userStudySubjectId: string;
}

export interface UserRecordStartPostResponse extends DefaultResultRes {
  data: {
    recordId: string;
  };
}

export interface UserRecordEndPatchRequest {
  recordId: string;
}

export interface UserRecordEndPatchResponse extends DefaultResultRes {}
