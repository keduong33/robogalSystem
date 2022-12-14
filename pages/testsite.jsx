/*
Testing Site --> Do whatever you want with it --> it has basic authentication implemented
 */

import { useRouter } from "next/router";
import React from "react";
import { useAuth } from "../authentication/AuthContext";

const Test = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push("login");
  }

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout(user.email, user.password);
      router.push("login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>Hello {user?.email}. Welcome to the Test page!</div>
      <button onClick={handleLogout}>Logout</button>
      <hr></hr>
      <a href="calendar">Testing</a>
    </div>
  );
};

export default Test;
