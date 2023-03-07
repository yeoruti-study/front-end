import { request } from "http";
import { useMutation, useQuery } from "react-query";

type ResourceKeyType = [string] | [string, ...any[]] | string[];

export function createResource<T, P>(resource: {
  key: ResourceKeyType;
  fetcher: (params?: P) => Promise<T>;
}) {
  return resource;
}

export function createResourceWithQuery<T, P>(resource: {
  key: ResourceKeyType;
  fetcher: (query: string, params?: P) => Promise<T>;
}) {
  return resource;
}

export function useResource<T, P>(resource: {
  useQuery: typeof useQuery;
  key: ResourceKeyType;
  fetcher: (params?: P) => Promise<T>;
  params?: P;
}) {
  return resource.useQuery(resource.key, () =>
    resource.fetcher(resource?.params)
  );
}

// export function useResourceWithQuery<T, P>(resource: {
//   useQuery: typeof useQuery;
//   key: ResourceKeyType;
//   fetcher: (query: string, params?: P) => Promise<T>;
//   params?: P;
// }) {
//   return resource.useQuery({
//     queryKey: resource.key,
//     queryFn: () => resource.fetcher(query, resource?.params)
//   });
// }

export function createRequest<T, P>(request: {
  key: ResourceKeyType;
  requester: (params?: P) => Promise<T>;
}) {
  return {
    key: request.key,
    requester: request.requester,
  };
}

export function createRequestWithQuery<T, P>(request: {
  key: ResourceKeyType;
  requester: (query: string, params?: P) => Promise<T>;
}) {
  return {
    key: request.key,
    requester: (query: string) => request.requester(query),
  };
}

export function useSetResource<T, P>(request: {
  useMutation: typeof useMutation;
  key: ResourceKeyType;
  requester: (params?: P) => Promise<T>;
}) {
  return request.useMutation({
    mutationKey: request.key,
    mutationFn: request.requester,
  });
}

export function useSetResourceWithQuery<T, P>(request: {
  useMutation: typeof useMutation;
  key: ResourceKeyType;
  requester: (query: string, params?: P) => Promise<T>;
  params?: P;
}) {
  return request.useMutation({
    mutationKey: request.key,
    mutationFn: (query: string) => request.requester(query, request?.params),
  });
}
