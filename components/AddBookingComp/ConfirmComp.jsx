import React from "react";

function ConfirmComp({ eligible }) {
  return (
    <div className="flex justify-end">
      <div className="mr-5">
        <button className="transparentButton font-normal underline text-gray-400">
          Cancel
        </button>
      </div>
      {eligible ? (
        <div>
          <button className="greenButton">Next</button>
        </div>
      ) : (
        <div>
          <button
            className="transparentButton font-normal text-gray-400 border border-gray-400"
            disabled
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default ConfirmComp;
