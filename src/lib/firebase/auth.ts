import {
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  linkWithCredential,
  EmailAuthProvider,
  getAuth,
} from "@firebase/auth";
import { app } from "./config";

export const auth = getAuth(app);

export const sendSignInLink = async (email: string) => {
  try {
    const actionCodeSettings = {
      url: "http://localhost:3000/magic-link-comfirmation",
      handleCodeInApp: true,
    };
    console.log("sendSignInLink");
    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    window.localStorage.setItem("emailForSignIn", email);
  } catch (error) {
    console.log(error);
  }
};

export const confirmSignInWithEmail = async () => {
  try {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      const email = window.localStorage.getItem("emailForSignIn");

      if (!email) {
        throw new Error("No email found");
      }

      const result = await signInWithEmailLink(
        auth,
        email,
        window.location.href
      );

      window.localStorage.removeItem("emailForSignIn");
    }
  } catch (error) {
    console.log(error);
  }
};

export const signOut = async () => {
  try {
    await auth.signOut();
    console.log("User signed out successfully");
    // Add any additional code or logic here after the user is signed out.
  } catch (error) {
    console.log(error);
  }
};

