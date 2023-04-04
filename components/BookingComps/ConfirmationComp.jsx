import { useRouter } from "next/router";
import React from "react";

function ConfirmComp({ eligible }) {
  const router = useRouter();
  const handleCancel = () => {
    router.back();
  };

  return (
    <div className="grid grid-cols-3 mx-auto lg:mx-60">
      <div className="col-start-3 flex justify-end">
        <div>
          <button
            onClick={handleCancel}
            className="transparentButton font-normal underline  max-w-fit"
          >
            Cancel
          </button>
        </div>
        {eligible ? (
          <div className="col-span-1 flex justify-end">
            <button className="greenButton">Next</button>
          </div>
        ) : (
          <div>
            <button
              className="transparentButton font-normal  border  max-w-fit"
              disabled
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ConfirmComp;
