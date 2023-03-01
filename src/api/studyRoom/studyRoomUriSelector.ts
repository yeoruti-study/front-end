import { isIncludesOneof } from "./../../utils/urlParser";

const studyRoomUriSelector = () => {
  // 만약 테스트 서버가 따로 있을 때를 대비해서
  if (isIncludesOneof(["localhost"])) {
    return "http://localhost:8080/api";
  }
  return "http://localhost:8080/api";
};

export default studyRoomUriSelector;
