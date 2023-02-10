// Reference: https://www.youtube.com/watch?v=ZmpO65DhRN0&ab_channel=SairajChouhan
/*
This File has the Firebase authentication processes
 */

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        let idToken = user.getIdToken();
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const signup = (email, password) => {
    sessionStorage.setItem("isAuthenticated", true);
    // sessionStorage.setItem("tokenId", tokenId);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    sessionStorage.setItem("isAuthenticated", true);
    // sessionStorage.setItem("tokenId", tokenId);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    sessionStorage.setItem("isAuthenticated", false);
    // sessionStorage.setItem("tokenId", null);
    setUser(null);
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
