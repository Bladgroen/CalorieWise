import Cookies from "js-cookie";
import { User } from "../interfaces/types";

export const getUserFromCookie = () => {
  const cookie = Cookies.get("auth");
  if (!cookie) {
    return;
  }
  return JSON.parse(cookie);
};

export const setUserCookie = (user: any) => {
  Cookies.set("auth", JSON.stringify(user), {
    expires: 1 / 24,
  });
  console.log(Cookies.get());
};

export const removeUserCookie = () => Cookies.remove("auth");
