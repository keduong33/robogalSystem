import { Router, useRouter } from "next/router";
import React from "react";
import { BsChevronCompactLeft } from "react-icons/bs";

function PageTitleComp({ pageTitle, pageDescription, hasArrow }) {
  const router = useRouter();

  return (
    <div className="flex">
      <div className="self-center">
        {hasArrow && (
          <BsChevronCompactLeft
            size={30}
            onClick={() => {
              router.back();
            }}
          />
        )}
      </div>
      <div>
        <div className="self-center text-3xl font-bold">{pageTitle}</div>
        <div className="self-center">{pageDescription}</div>
      </div>
    </div>
  );
}

export default PageTitleComp;
