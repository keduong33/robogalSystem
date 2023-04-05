/*
Functionalities and Design of the REGISTER Page
 */

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import RegisterForm from "../components/RegisterForm";
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

  async function saveNewUser(user) {
    console.log(user);
    await setDoc(doc(db, "users", user.uid), user);
  }

  useEffect(() => {
    if (user) saveNewUser(user);
  }, [user]);

  if (isAuthenticated(user)) {
    router.push("/");
  } else {
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
        <RegisterForm
          formDetails={formDetails}
          setFormDetails={setFormDetails}
          handleSignup={handleSignup}
        />
      </div>
    );
  }
}

export default Register;
