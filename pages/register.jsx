/*
Functionalities and Design of the REGISTER Page
 */

import { useRouter } from "next/router";
import React, { useState } from "react";
import RegisterComp from "../components/RegisterComp";
import { useAuth } from "../authentication/AuthContext";

function Register() {
  const router = useRouter();
  const { user, signup } = useAuth();
  console.log(user);
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
  });

  //basic authentication check --> redirect to default page
  if (user) {
    router.push("testsite");
  }

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(formDetails.email, formDetails.password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-full flex items-center justify-center">
      <RegisterComp
        formDetails={formDetails}
        setFormDetails={setFormDetails}
        handleSignup={handleSignup}
      />
    </div>
  );
}

export default Register;
