/*
This File has the skeleton of the Register Form 
 */

import React, { useState } from "react";
import LogoBar from "../components/LogoBar";
import RegisterForm from "../components/RegisterForm";

function Register() {
  return (
    <main className="bg-gradient-to-br from-blue-50 via-blue-400 to-blue-200 min-h-screen">
      {/* login container */}
      <div className="h-full flex flex-col">
        <div>
          <LogoBar />
        </div>
        {/* Form container */}
        <div className="h-full flex items-center justify-center">
          <RegisterForm />
        </div>
      </div>
    </main>
  );
}

export default Register;
