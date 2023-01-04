import React from "react";

function ConfirmComp({ eligible }) {
  return (
    <div className="grid grid-cols-3 mx-auto lg:mx-60">
      <div className="col-start-3 flex justify-end">
        <div>
          <button className="transparentButton font-normal underline text-gray-400 max-w-fit">
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
              className="transparentButton font-normal text-gray-400 border border-gray-400 max-w-fit"
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
