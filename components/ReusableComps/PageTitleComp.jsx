import React from "react";
import { BsChevronCompactLeft } from "react-icons/bs";

function PageTitleComp({ pageTitle, pageDescription }) {
  return (
    <div className="flex">
      <div className="self-center">
        <BsChevronCompactLeft size={30} />
      </div>
      <div>
        <div className="self-center">{pageTitle}</div>
        <div className="self-center">{pageDescription}</div>
      </div>
    </div>
  );
}

export default PageTitleComp;
