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
    </div>
  );
};

export default Test;
