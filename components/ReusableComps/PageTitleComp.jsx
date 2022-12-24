import React from "react";
import { BsChevronCompactLeft } from "react-icons/bs";

function PageTitleComp() {
  return (
    <div className="flex">
      <div className="self-center">
        <BsChevronCompactLeft size={30} />
      </div>
      <div>
        <div className="self-center">PageTitleComp</div>
        <div>Page Description</div>
      </div>
    </div>
  );
}

export default PageTitleComp;
