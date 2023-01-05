import React from "react";

function AddSessionTypeComp({ sessionType, setSessionType }) {
  return (
    <div className="customBorder">
      <form>
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

export default AddSessionTypeComp;
