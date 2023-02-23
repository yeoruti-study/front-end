import navHome from "../../../assets/icons/detail__nav__home.svg";
import navCalendar from "../../../assets/icons/detail__nav__calendar.svg";
import navRank from "../../../assets/icons/detail__nav__rank.svg";
import navInvite from "../../../assets/icons/detail__nav__invite.svg";
import navChat from "../../../assets/icons/detail__nav__chat.svg";

interface navItemType {
  title: string;
  iconSrc: string;
}
export const navItemData: navItemType[] = [
  {
    title: "홈",
    iconSrc: navHome,
  },
  {
    title: "출석부",
    iconSrc: navCalendar,
  },
  {
    title: "랭킹",
    iconSrc: navRank,
  },
  {
    title: "초대",
    iconSrc: navInvite,
  },
  {
    title: "채팅",
    iconSrc: navChat,
  },
];
