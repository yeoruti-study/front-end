import userRequest from ".";
import {
  createRequest,
  createResource,
  createResourceWithQuery,
} from "../../hooks/react_query_hooks/useResource";

export const USER_POST = createRequest({
  key: ["USER_POST"],
  requester: userRequest.UserPost,
});

export const USER_PROFILE_GET = createResource({
  key: ["USER_PROFILE_GET"],
  fetcher: userRequest.UserProfileGet,
});

export const USER_PROFILE_PUT = createRequest({
  key: ["USER_PROFILE_PUT"],
  requester: userRequest.UserProfilePut,
});

export const USER_DELETE = createRequest({
  key: ["USER_DELETE"],
  requester: userRequest.UserDelete,
});

export const USER_ALL_GET = createResource({
  key: ["USER_ALL_GET"],
  fetcher: userRequest.UserAllGet,
});

export const USER_GET_WITH_ID = createResourceWithQuery({
  key: ["USER_GET_WITH_ID"],
  fetcher: (userId: string) => userRequest.UserGetWithID(userId),
});
