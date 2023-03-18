import studyCategoryApiClient from "./studyCategoryApiClient";
import StudyCategoryAPI from "./studyCategoryReq";

const studyCategoryRequest = new StudyCategoryAPI(
  studyCategoryApiClient,
  "/study-category"
);

export default studyCategoryRequest;
