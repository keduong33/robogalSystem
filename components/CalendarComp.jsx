/*
Design of the Calendar Component
 */

import React from "react";
import { Calendar } from "react-calendar";

function CalendarComp({ date, setDate }) {
  return (
    <div>
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
        <div>
          <button>Choose Time</button>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default CalendarComp;
