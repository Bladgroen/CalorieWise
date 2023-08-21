import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import initFirebase from "../firebase/config";
import { User } from "../interfaces/types";
import {
  getUserFromCookie,
  removeUserCookie,
  setUserCookie,
} from "./userCookie";

initFirebase();

export const mapUserData = async (user: firebase.User) => {
  const { uid, email } = user;
  const token = await user.getIdToken(true);
  return {
    id: uid,
    email: email || "",
    token,
  };
};

const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const logout = async () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        router.push("/login");
      })
      .catch((e: any) => {
        console.error(e);
      });
  };

  useEffect(() => {
    const cancelAuthListener = firebase
      .auth()
      .onIdTokenChanged(async (userToken) => {
        if (userToken) {
          const userData = await mapUserData(userToken);
          setUserCookie(userData);
          setUser(userData);
        } else {
          removeUserCookie();
          setUser(null);
        }
      });

    const userFromCookie = getUserFromCookie();
    if (!userFromCookie) {
      return;
    }
    setUser(userFromCookie);
    return () => {
      cancelAuthListener(); // This is the unsubscribe function
    };
  }, []);

  return { user, logout };
};

export { useUser };
