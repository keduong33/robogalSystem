import React from "react";

function AddLocationComp({ locationType, setLocationType }) {
  return (
    <div className="customBorder mt-5">
      <form>
        <div>
          <label>Choose Location</label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              checked={locationType === "Default Location"}
              onChange={() => {
                setLocationType("Default Location");
              }}
            />
            Default Location
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              checked={locationType === "Custom Location"}
              onChange={() => {
                setLocationType("Custom Location");
              }}
            />
            Custom Location
          </label>
        </div>
      </form>
    </div>
  );
}

export default AddLocationComp;
