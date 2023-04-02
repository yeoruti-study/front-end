interface DefaultResultRes {
  data?: object;
  status: string;
  message: string;
  memo?: string;
}

export interface GeneralLoginPostRequest {
  username: string;
  password: string;
}

export interface GeneralLoginPostResponse extends DefaultResultRes{ }
export interface GeneralLogoutGetResponse extends DefaultResultRes{ }

