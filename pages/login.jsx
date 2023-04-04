/*
Functionalities and Design of the LOGIN Page
 */

import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import { useRouter } from "next/router";
import { useAuth } from "../authentication/AuthContext";
import LoadingScreen from "../components/utilities/LoadingScreen";
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
    return <LoadingScreen />;
  } else {
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await login(formDetails.email, formDetails.password);
      } catch (error) {
        // console.log(error);
      }
    };

    return (
      <div className="h-full flex items-center justify-center">
        <LoginForm
          setFormDetails={setFormDetails}
          formDetails={formDetails}
          handleLogin={handleLogin}
        />
      </div>
    );
  }
}

export default Login;
