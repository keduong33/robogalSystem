/*
Functionalities and Design of the LOGIN Page
 */

import React, { useState } from "react";
import LoginComp from "../components/LoginComp";
import { useRouter } from "next/router";
import { useAuth } from "../authentication/AuthContext";
import { isAuthenticated } from "../components/SecurityCheck";

function Login() {
  const router = useRouter();
  const { user, login } = useAuth();
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
  });

  //basic authentication check --> redirect to default page
  if (isAuthenticated(user)) {
    router.push("/");
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(formDetails.email, formDetails.password);
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <div className="flex h-full items-center">
      <LoginComp
          setFormDetails={setFormDetails}
          formDetails={formDetails}
          handleLogin={handleLogin}
      />
    </div>
  );
}

export default Login;
