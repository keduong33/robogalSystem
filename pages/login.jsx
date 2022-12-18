/*
Functionalities and Design of the LOGIN Page
 */

import React, { useState } from "react";
import LoginComp from "../components/LoginComp";
import LogoBar from "../components/LogoBar";
import { useRouter } from "next/router";
import { useAuth } from "../authentication/AuthContext";

function Login() {
  const router = useRouter();
  const { user, login } = useAuth();
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
  });

  //basic authentication check --> redirect to default page
  if (user) {
    router.push("testsite");
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(formDetails.email, formDetails.password);
      router.push("testsite");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-full flex items-center justify-center">
      <LoginComp
        setFormDetails={setFormDetails}
        formDetails={formDetails}
        handleLogin={handleLogin}
      />
    </div>
  );
}

export default Login;
