import React from "react";

function PickLocation({ location, setLocation }) {
  return (
    <div className="customBorder w-fit flex justify-self-center">
      <form className="pr-4">
        <label>Choose Location</label>
        <div>
          <label>
            <input
              type="radio"
              checked={location === "Your school"}
              onChange={() => {
                setLocation("Your school");
              }}
            />
            Your school
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              checked={location === "custom"}
              onChange={() => {
                setLocation("custom");
              }}
            />
            Suggest different location
          </label>
        </div>
      </form>
    </div>
  );
}

export default PickLocation;
