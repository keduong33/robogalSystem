/*
Functionalities and Design of the LOGIN Page
 */

import React, { useState } from "react";
import LoginComp from "../components/LoginComp";
import { useRouter } from "next/router";
import { useAuth } from "../authentication/AuthContext";
import { isAuthenticated } from "../components/SecurityCheck";
import LoadingScreenComp from "../components/ReusableComps/LoadingScreenComp";

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
    return <LoadingScreenComp />;
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
        <LoginComp
          setFormDetails={setFormDetails}
          formDetails={formDetails}
          handleLogin={handleLogin}
        />
      </div>
    );
  }
}

export default Login;
