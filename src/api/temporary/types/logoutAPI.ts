interface DefaultResultRes {
  data?: object;
  status: string;
  message: string;
  memo?: string;
}

export interface LogoutResponse extends DefaultResultRes {}
