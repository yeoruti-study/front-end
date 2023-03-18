interface DefaultResultRes {
  data?: object;
  status: string;
  message: string;
  memo?: string;
}

type StudyCategoryType = {
  id: string;
  name: string;
  description: string;
};
export interface StudyCategoryPostRequest {
  name: string;
  description?: string;
}

export interface StudyCategoryPostResponse extends DefaultResultRes {}

export interface StudyCategoryAllGetResponse {
  data: StudyCategoryType[];
}

export interface StudyCategoryPutRequest {
  id: string;
  name: string;
  description: string;
}
export interface StudyCategoryPutResponse extends DefaultResultRes {}

export interface StudyCategoryDeleteResponse extends DefaultResultRes {}
