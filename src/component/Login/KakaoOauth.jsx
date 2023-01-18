import axios from "axios";

const { Kakao } = window;

const JAVASCRIPT_KEY = "3daf56efeb95916bc80ff1e2a9585671";
const REST_API_KEY = "b8fc366879c4e2fa9bddef1d943cae7d";
const ADMIN_KEY = "91fe5e2f4f0c8ea42d27efb169a34a52";

export function loginWithKakao() {
  Kakao.init(JAVASCRIPT_KEY);
  console.log(Kakao);
  console.log(Kakao.isInitialized());
  Kakao.Auth.authorize({
    redirectUri: "http://localhost:3000/kakao/callback",
  });
}

const url = "https://kauth.kakao.com/oauth/token";
const kakaoHeader = {
  Authorization: ADMIN_KEY,
  "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
};

// 참고: https://kdinner.tistory.com/92
// 참고: https://keeper.tistory.com/47
export async function requestUserInfo(code) {
  const payload = {
    grant_type: "authorization_code",
    client_id: REST_API_KEY,
    redirect_uri: "http://localhost:3000/kakao/callback",
    code,
  };
  const queryString = Object.keys(payload)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(payload[k]))
    .join("&");
  try {
    const result = await axios.post(url, queryString, { headers: kakaoHeader });
    console.log(result);
    return result;
  } catch (e) {
    console.log(e);
  }
}
