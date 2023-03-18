import studyCategoryRequest from ".";
import {
  createRequest,
  createRequestWithQuery,
  createResource,
} from "../../hooks/react_query_hooks/useResource";

export const STUDY_CATEGORY_POST = createRequest({
  key: ["STUDY_CATEGORY_POST"],
  requester: studyCategoryRequest.StudyCategoryPost,
});

export const STUDY_CATEGORY_ALL_GET = createResource({
  key: ["STUDY_CATEGORY_ALL_GET"],
  fetcher: studyCategoryRequest.StudyCategoryAllGet,
});

export const STUDY_CATEGORY_PUT = createRequest({
  key: ["STUDY_CATEGORY_PUT"],
  requester: studyCategoryRequest.StudyCategoryPut,
});

export const STUDY_CATEGORY_DELETE = createRequestWithQuery({
  key: ["STUDY_CATEGORY_DELETE"],
  requester: (studyCategoryId: string) =>
    studyCategoryRequest.StudyCategoryDelete(studyCategoryId),
});
