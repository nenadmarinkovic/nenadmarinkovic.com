import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../lib/firebase";
import useAuth from "../hooks/useAuth";

const Auth = () => {
  const { isLoggedIn, user } = useAuth();

  const handleAuth = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div>
      {isLoggedIn && (
        <>
          <span color="green.500">{user.email}</span>
          <button color="red.500" onClick={() => auth.signOut()}>
            Logout
          </button>
        </>
      )}
      {!isLoggedIn && (
        <button onClick={() => handleAuth()}>Login with Google</button>
      )}
    </div>
  );
};

export default Auth;
