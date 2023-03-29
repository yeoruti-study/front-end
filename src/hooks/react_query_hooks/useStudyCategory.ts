import { useMutation, useQuery } from "react-query";
import { useSetRecoilState } from "recoil";
import categoryAddPopupAtom from "../../atoms/categoryAdd";
import localConsole from "../../utils/localConsole";
import {
  STUDY_CATEGORY_ALL_GET,
  STUDY_CATEGORY_DELETE,
  STUDY_CATEGORY_POST,
  STUDY_CATEGORY_PUT,
} from "./../../api/studyCategory/Resource";
import {
  useResource,
  useSetResource,
  useSetResourceWithQuery,
} from "./useResource";

export const useStudyCategoryPost = () => {
  const setCategoryAddPopup = useSetRecoilState(categoryAddPopupAtom);
  const queryState = useSetResource({
    useMutation,
    key: STUDY_CATEGORY_POST.key,
    requester: STUDY_CATEGORY_POST.requester,
  });

  const onClick = (name: string, description?: string) => {
    localConsole?.log(`onclick: ${name}, ${description}`);
    queryState.mutate({
      name,
      description,
    });
  };

  if (queryState.status === "success") {
    alert("카테고리를 생성했습니다");
    setCategoryAddPopup(false);
  }

  return onClick;
};

export const useStudyCategoryAllGet = () => {
  const queryState = useResource({
    useQuery,
    key: STUDY_CATEGORY_ALL_GET.key,
    fetcher: STUDY_CATEGORY_ALL_GET.fetcher,
  });

  return queryState;
};

export const useStudyCategoryPut = () => {
  const queryState = useSetResource({
    useMutation,
    key: STUDY_CATEGORY_PUT.key,
    requester: STUDY_CATEGORY_PUT.requester,
  });

  const onClick = (id: string, name: string, description: string) => {
    queryState.mutate({
      id,
      name,
      description,
    });

    return [onClick, queryState];
  };
};

export const useStudyCategoryDelete = () => {
  const queryState = useSetResourceWithQuery({
    useMutation,
    key: STUDY_CATEGORY_DELETE.key,
    requester: STUDY_CATEGORY_DELETE.requester,
  });

  const onClick = (studyCategoryId: string) => {
    queryState.mutate(studyCategoryId);
  };

  return [onClick, queryState];
};
