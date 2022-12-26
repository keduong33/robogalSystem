/*
Design of the Logo Bar
 */

import Image from "next/image";
import React from "react";
import { useAuth } from "../../authentication/AuthContext";
import { useRouter } from "next/router";
import { FaRegUserCircle } from "react-icons/fa";

function LogoBar() {
  const { user } = useAuth();
  const router = useRouter();

  // dynamic logobar --> so when people login, the user icon appears on the right
  // ofc this is for now

  return (
    <div className="w-full bg-transparent">
      {user ? (
        <div className="flex w-full justify-between">
          {/* Robogal Logo */}
          <div className="w-full">
            <Image
              src="/logo.png"
              alt="Logo"
              width={200}
              height={200}
              className="w-4/12 md:w-3/12 lg:w-1/6 hover:cursor-pointer"
              onClick={() => {
                router.push("/");
              }}
            />
          </div>

          {/* User Icon */}
          <div className="self-center">
            <FaRegUserCircle
              className="hover:cursor-pointer"
              size={50}
              onClick={() => {
                router.push("/user");
              }}
            />
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={200}
            height={200}
            className="w-4/12 md:w-3/12 lg:w-1/6"
          />
        </div>
      )}
    </div>
  );
}

export default LogoBar;
