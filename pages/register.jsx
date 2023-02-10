/*
Functionalities and Design of the REGISTER Page
 */

import { useRouter } from "next/router";
import React, { useState } from "react";
import RegisterComp from "../components/RegisterComp";
import { useAuth } from "../authentication/AuthContext";
import { db } from "../config/firebase";
import { doc, setDoc } from "firebase/firestore";
import { isAuthenticated } from "../components/SecurityCheck";

function Register() {
  const router = useRouter();
  const { user, signup } = useAuth();
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
  });

  //basic authentication check --> redirect to default page
  if (isAuthenticated(user)) {
    router.push("/");
    return null;
  } else {
    const handleSignup = async (e) => {
      e.preventDefault();
      try {
        await signup(formDetails.email, formDetails.password);
        saveNewUser(user);
      } catch (error) {
        //console.log(error);
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
}

async function saveNewUser(user) {
  await setDoc(doc(db, "user", user.uid), {
    name: user.email,
    role: "user",
  });
}

export default Register;
