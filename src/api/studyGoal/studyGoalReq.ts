import {
  StudyGoalPostResponse,
  StudyGoalPostRequest,
  StudyGoalOneGetResponse,
  StudyGoalOneGetRequest,
  StudyGoalDeleteResponse,
  StudyGoalDeleteRequest,
  StudyGoalByUserSujectGetRequest,
  StudyGoalByUserSubjectGetResponse,
  StudyGoalAllGetResponse
} from './types/studyGoalAPI';
import RequestCore from "../common/RequestCore";

class StudyGoalAPI extends RequestCore {
  public StudyGoalPost = async (params?: StudyGoalPostRequest) => {
    const response = await this.apiRequest<
      StudyGoalPostRequest,
      StudyGoalPostResponse
    >({
      requestMethod: "POST",
      requestData: params,
      url: "one",
    });

    return response;
  };

  public StudyGoalAllGet = async (userId: string) => {
    const response = await this.apiRequest<undefined, StudyGoalAllGetResponse>({
      requestMethod: "GET",
      url: `list/user/${userId}`,
    });

    return response;
  };

  public StudyGoalOneGet = async (studyGoalId: string) => {
    const response = await this.apiRequest<
      StudyGoalOneGetRequest,
      StudyGoalOneGetResponse
    >({
      requestMethod: "GET",
      url: `one/${studyGoalId}`
    });

    return response;
  };


  public StudyGoalByUserSubjectIdOneGet = async (userStudySubjectId: string) => {
    const response = await this.apiRequest<
      StudyGoalByUserSujectGetRequest,
      StudyGoalByUserSubjectGetResponse
    >({
      requestMethod: "GET",
      url: `list/user-study-subject/${userStudySubjectId}`,
    });
    return response;
  }

  /* StudyGoal에 대한 Put api X
  public StudyGoalPut = async (params: StudyGoalPutRequest) => {
    const response = await this.apiRequest<
      StudyGoalPutRequest,
      StudyGoalPutResponse
    >({
      requestMethod: "PUT",
      requestData: params,
    });

    return response;
  };
  */
  
  public StudyGoalDelete = async (studyGoalId: string) => {
    const response = await this.apiRequest<
      StudyGoalDeleteRequest,
      StudyGoalDeleteResponse
    >({
      requestMethod: "DELETE",
      url: `one/${studyGoalId}`,
    });

    return response;
  };

}

export default StudyGoalAPI;
