import RequestCore from "../common/RequestCore";
import { LogoutResponse } from "./types/logoutAPI";

class LogoutAPI extends RequestCore {
  public LogoutGet = async () => {
    const response = await this.apiRequest<undefined, LogoutResponse>({
      requestMethod: "GET",
      url: "logout",
    });
    return response;
  };
}

export default LogoutAPI;
