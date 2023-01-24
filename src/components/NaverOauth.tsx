import axios from "axios";
import { stringify } from "querystring";

declare global {
  interface Window {
    naver: any;
  }
}

const { naver } = window;
const url = "https://nid.naver.com/oauth2.0/token";
export const CLIENT_ID = "qEr7Uz5gi5EshvhFY7lx";
export const CLIENT_SECRET = "48nkQiPtG8";
interface Props {
  [key: string]: string;
  grant_type: string;
  client_id: string;
  client_secret: string;
  code: string;
  state: string;
}

export async function requestUserInfo(code: string) {
  const payload: Props = {
    grant_type: "authorization_code",
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code,
    state: "1234",
  };
  const naverHeader = {
    Authorization: `Bearer${code}`,
    "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
  };
  const queryString = Object.keys(payload)
    .map(
      (k: string) =>
        encodeURIComponent(k) + "=" + encodeURIComponent(payload[k])
    )
    .join("&");
  try {
    const result = await axios.post(url, queryString, { headers: naverHeader });
    console.log(result);
    return result;
  } catch (e) {
    console.log(e);
  }
}

export const userAccessToken = () => {
  return window.location.href.includes("access_token") && getToken();
};
const getToken = () => {
  const token = window.location.href.split("=")[1].split("&")[0];
  return token;
};

// export async function requestUserInfo(token: string) {
//   const payload = {
//     grant_type: "authorization_code",
//     client_id: CLIENT_ID,
//     client_secret: CLIENT_SECRET,
//     code,
//   };
//   const queryString = Object.keys(payload)
//     .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(payload[k]))
//     .join("&");
//   try {
//     const result = await axios.post(url, queryString, { headers: kakaoHeader });
//     console.log(result);
//     return result;
//   } catch (e) {
//     console.log(e);
//   }
// }
