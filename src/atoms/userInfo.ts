import { atom } from "recoil";
import { UserInfo } from "../api/user/types/userAPI";
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
