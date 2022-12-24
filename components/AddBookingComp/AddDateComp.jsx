/*
Design of the Calendar Component
 */

import React from "react";
import { Calendar } from "react-calendar";

function AddDateComp({ date, setDate, setDatePicked }) {
  return (
    <div className="flex flex-col bg-transparent customBorder">
      <div>
        <Calendar
          onChange={setDate}
          value={date}
          minDetail="year"
          next2Label={null}
          prev2Label={null}
          showNeighboringMonth={false}
          formatShortWeekday={(locale, date) => date.toString().substring(0, 1)}
        />
      </div>
      <div className="self-end mr-2 my-2">
        <button
          className="blueButton"
          onClick={() => {
            setDatePicked(true);
          }}
        >
          Choose Date
        </button>
      </div>
    </div>
  );
}

export default AddDateComp;
