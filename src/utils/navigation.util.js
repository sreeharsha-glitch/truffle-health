import { FiHome, FiLogOut } from "react-icons/fi";
import { BsChatHeart } from "react-icons/bs";
import { HiOutlineNewspaper } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { BsCalendarMinus } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";

export const LinkItems = [
  { name: "Home", icon: FiHome, href: "/" },
  { name: "Insurance", icon: HiOutlineNewspaper, href: "" },
  { name: "Negotiation", icon: BsChatHeart, href: "" },
];

export const BottomItems = [
  { name: "Profile", icon: CgProfile, href: "" },
  { name: "Logout", icon: FiLogOut, href: "" },
];

export const TopNavItems = [
  { name: "Calender", icon: BsCalendarMinus, link: "" },
  { name: "Notifications", icon: IoIosNotifications, link: "" },
];
