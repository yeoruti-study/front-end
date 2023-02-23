export const isUrlIncludes = (str: string) =>
  window.location.href.includes(str);

export const isIncludesOneof = (list: string[]) => {
  const includes = list.filter((elem) => {
    return isUrlIncludes(elem);
  });
  return includes.length !== 0 ? true : false;
};
