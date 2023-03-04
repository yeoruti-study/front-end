import { StudyRoomType } from "./../../studyRoom/types/studyRoomType";
export interface RoomUserType {
  id: string;
  userDto: {
    id: string;
    username: string;
    roles: string;
    profileName: string;
    profileBirth: string;
    profileImagePath: string;
    alarmPermission: boolean;
    friendAcceptance: boolean;
  };
  studyRoomDto: StudyRoomType;
}
