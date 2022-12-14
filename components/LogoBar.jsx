/*
Design of the Logo Bar
 */

import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useAuth } from "../authentication/AuthContext";

function LogoBar() {
  const router = useRouter();
  const { user } = useAuth();

  return (
    <div className="w-full">
      <div className="flex justify-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={200}
          height={200}
          className="w-4/12 md:w-3/12 lg:w-1/6 "
        />
      </div>
    </div>
  );
}

export default LogoBar;
