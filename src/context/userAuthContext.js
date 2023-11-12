import { createContext, useContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
} from "firebase/auth";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [verificationEmailSent, setVerificationEmailSent] = useState(false);

  function logIn(email, password) {
    return signInWithEmailAndPassword(getAuth, email, password);
  }

  async function signUp(email, password) {
    const allowedProviders = ["gmail.com", "yahoo.com", "outlook.com"];
    const emailProvider = email.split("@")[1]?.toLowerCase();

    if (!emailProvider || !allowedProviders.includes(emailProvider)) {
      throw new Error("Invalid Email Provider");
    }

    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters");
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        getAuth,
        email,
        password
      );
      const user = userCredential.user;

      await sendEmailVerification(user);

      setVerificationEmailSent(true);
      return user;
    } catch (error) {
      throw error;
    }
  }

  function logOut() {
    return signOut(getAuth);
  }

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(getAuth, googleAuthProvider);
  }

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(getAuth, (currentuser) => {
  //     console.log("Auth", currentuser);
  //     setUser(currentuser);
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  return (
    <userAuthContext.Provider
      value={{
        user,
        logIn,
        signUp,
        logOut,
        googleSignIn,
        verificationEmailSent,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
