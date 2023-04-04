import React from "react";

function PickSessionType({ sessionType, setSessionType, setLocation }) {
  return (
    <div className="customBorder w-fit flex justify-self-center">
      <form className="pr-4">
        <div>
          <label>Choose Session Type</label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              checked={sessionType === "In Person"}
              onChange={() => {
                setSessionType("In Person");
              }}
            />
            In person
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              checked={sessionType === "Virtual"}
              onChange={() => {
                setLocation(null);
                setSessionType("Virtual");
              }}
            />
            Virtual
          </label>
        </div>
      </form>
    </div>
  );
}

export default PickSessionType;
