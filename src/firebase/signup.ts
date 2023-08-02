import { RegisterFormData } from "@/interfaces/types";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import firebase_app from "./config";

const auth = getAuth(firebase_app);

export async function signUp(values: RegisterFormData) {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function signIn(email: string, password: string) {
  let result = null,
    error = null;

  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
