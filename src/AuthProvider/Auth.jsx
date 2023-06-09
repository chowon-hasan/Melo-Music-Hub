import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const Auth = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = async (email, password, name, photo) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: name,
        photoURL: photo,
      });

      return userCredential;
    } catch (error) {
      console.error(error);
    }
  };

  const signInUser = async (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      // if (loggedUser) {
      //   axios
      //     .post("http://localhost:5000/jwt", { email: loggedUser.email })
      //     .then((data) => {
      //       localStorage.setItem("access-token", data.data.token);
      //     });
      // } else {
      //   localStorage.removeItem("access-token");
      // }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    signInUser,
    logout,
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Auth;
