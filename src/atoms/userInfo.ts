import { atom } from "recoil";
const userInfoAtom = atom<UserInfo>({
  key: "userInfoAtom",
  default: {
    id: "",
    username: "",
    roles: "",
    profileName: "",
    profileBirth: "",
    profileImagePath: "",
    alarmPermission: true,
    friendAcceptance: true,
  },
});

export default userInfoAtom;
interface UserInfo {
  id: string;
  username: string;
  roles: string;
  profileName: string;
  profileBirth: string;
  profileImagePath: string;
  alarmPermission: boolean;
  friendAcceptance: boolean;
}
