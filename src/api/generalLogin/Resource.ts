import generalLoginRequest from ".";
import {
  createRequest,
  createResource
} from "../../hooks/react_query_hooks/useResource";

export const GENERAL_LOGIN = createRequest({
  key: ["GENERAL_LOGIN"],
  requester: generalLoginRequest.GeneralLoginPost,
});

export const GENERAL_LOGOUT = createResource({
  key: ["GENERAL_LOGOUT"],
  fetcher: generalLoginRequest.GeneralLogoutGet,
});