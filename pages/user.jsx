import React from "react";
import { useAuth } from "../authentication/AuthContext";

function User() {
  const { user } = useAuth();
  return <div>Hello {user?.email}</div>;
}

export default User;
