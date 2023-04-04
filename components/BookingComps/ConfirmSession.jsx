import { useRouter } from "next/router";
import React, { useState } from "react";
import ConfirmationCard from "../CardComps/ConfirmationCard";

function ConfirmSession({ eligible, bookingInfo, user }) {
  const router = useRouter();
  const [isConfirmCardOpen, setIsConfirmCardOpen] = useState(false);

  const handleCancelClick = () => {
    sessionStorage.removeItem("currentTemplate", null);
    router.back();
  };

  return (
    <div>
      <div className="grid grid-cols-3 mx-auto lg:mx-60">
        <div className="col-start-3 flex justify-end">
          <div>
            <button
              onClick={handleCancelClick}
              className="transparentButton font-normal underline  max-w-fit"
            >
              Cancel
            </button>
          </div>
          {eligible ? (
            <div className="col-span-1 flex justify-end">
              <button
                className="greenButton"
                onClick={() => {
                  setIsConfirmCardOpen(true);
                }}
              >
                Next
              </button>
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

      <div>
        {isConfirmCardOpen && (
          <ConfirmationCard
            isConfirmCardOpen={isConfirmCardOpen}
            setIsConfirmCardOpen={setIsConfirmCardOpen}
            bookingInfo={bookingInfo}
            user={user}
          />
        )}
      </div>
    </div>
  );
}

export default ConfirmSession;
