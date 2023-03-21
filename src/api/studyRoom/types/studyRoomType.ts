export interface StudyRoomType {
  id: string;
  name: string;
  studyCategoryDto: {
    id: string;
    name: string;
    description: string;
  };
  maximumNumberOfPeople: number;
  studyGoalTime?: string;
  roomPassword?: string;
  masterUserId?: string;
  createdAt: string;
  updatedAt?: string;
  masterUserUsername: string;
  masterUserProfileName: string;
}
