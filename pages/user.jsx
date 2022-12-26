import React from "react";
import { useAuth } from "../authentication/AuthContext";
import { isAuthenticated } from "../components/SecurityCheck";
import { useRouter } from "next/router";

function User() {
  const { user, logout } = useAuth();
  const router = useRouter();

  if (!isAuthenticated(user)) {
    router.push("/login");
  }

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout(user.email, user.password);
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <div>
      <div>Hello user: {user?.email}</div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default User;
