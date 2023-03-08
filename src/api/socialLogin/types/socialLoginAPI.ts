interface DefaultResultRes {
  data?: object;
  status: string;
  message: string;
  memo?: string;
}

type KakaoType = "kakao";
type NaverType = "naver";
export type SocialLoginType = KakaoType | NaverType;

export interface SocialLoginPostRequest {
  provider: SocialLoginType;
  code: string;
}
export interface SocialLoginPostResponse extends DefaultResultRes {}

export interface SocialLoginKakaoRequest {
  provider: KakaoType;
  code: string;
}
export interface SocailLoginKakaoResponse extends DefaultResultRes {}

export interface SocialLoginNaverRequest {
  provider: NaverType;
  code: string;
}
export interface SocialLoginNaverResponse extends DefaultResultRes {}
