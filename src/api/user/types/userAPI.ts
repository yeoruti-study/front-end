interface DefaultResultRes {
  data?: object;
  status: string;
  message: string;
  memo?: string;
}

export type UserInfo = {
  id: string;
  username: string;
  roles: string;
  profileName: string;
  profileBirth: string;
  profileImagePath?: string;
  alarmPermission?: boolean;
  friendAcceptance?: boolean;
};

export type UserEdit = {
  profileName: string;
  profileBirth: string;
  profileImagePath: string;
  friendAcceptance: boolean;
  alarmPermission: boolean;
};

export interface UserPostRequest {
  username: string;
  password: string;
  profileName: string;
  profileBirth: string;
  profileImagePath?: string;
  alarmPermission?: boolean;
  friendAcceptance?: boolean;
}

export interface UserPostResponse extends DefaultResultRes {}

export interface UserProfileGetResponse extends DefaultResultRes {
  data: UserInfo;
}

export interface UserProfilePutReqeust {
  profileName: string;
  profileBirth: string;
  profileImagePath: string;
  friendAcceptance: boolean;
  alarmPermission: boolean;
}
export interface UserProfilePutResponse extends DefaultResultRes {}

export interface UserDeleteRequest {
  username: string;
  password: string;
}
export interface UserDeleteResponse extends DefaultResultRes {}

export interface UserAllGetResponse extends DefaultResultRes {
  data: UserInfo[];
}

export interface UserGetWithIDResponse extends DefaultResultRes {
  data: UserInfo;
}
