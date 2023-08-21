import { RegisterFormData } from "@/interfaces/types";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import firebase from "firebase/compat/app";
import initFirebase from "./config";

initFirebase();

const auth = firebase.auth();

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

export async function signIn(values: RegisterFormData) {
  let result = null,
    error = null;

  try {
    result = await signInWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function logOut() {
  let result = null,
    error = null;

  try {
    result = await signOut(auth);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
