import { atom, selector } from "recoil";
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

export const userIdSelector = selector({
  key: "userIdSelector",
  get: ({ get }) => {
    const originState = get(userInfoAtom);
    return originState.id;
  },
});
export default userInfoAtom;
