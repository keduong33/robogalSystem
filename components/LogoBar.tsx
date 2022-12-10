/*
The design of the Logo Bar/ Navigation Bar
 */

import Image from "next/image";
import React from "react";

type Props = {};

function LogoBar({}: Props) {
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
