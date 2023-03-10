import { AxiosInstance } from "axios";
import localConsole from "../../utils/localConsole";

type AxiosMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

class RequestCore {
  private client: AxiosInstance;

  public baseUrl = "";
  public url = "";

  constructor(client: AxiosInstance, url: string) {
    this.client = client;
    this.baseUrl = url;
  }

  public apiRequest = <T, P>({
    requestMethod,
    requestData,
    url,
  }: {
    requestMethod: AxiosMethod;
    requestData?: T;
    url: string;
  }) => {
    this.url = this.baseUrl + url;
    if (!this.client) {
      console.error("API client 없음");
      return;
    }

    const response = this.client.request<P>({
      url: this.url,
      method: requestMethod,
      data: requestData,
      timeout: 10000,
    });
    response.catch((e) => {
      localConsole?.error(e);
    });
    return response;
  };
}
export default RequestCore;
