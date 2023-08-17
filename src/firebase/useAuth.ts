import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useAuth = (redirectIfNotLoggedIn = true) => {
  const router = useRouter();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
      } else {
        if (redirectIfNotLoggedIn) {
          router.replace("/login");
        }
      }
    });
  });
};

export default useAuth;
