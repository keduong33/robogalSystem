/*
Design of the Calendar Component
 */

import { CalendarPicker, LocalizationProvider } from "@mui/x-date-pickers";
import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function CalendarComp({ date, setDate }) {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CalendarPicker
          date={date}
          onChange={setDate}
          shouldDisableYear={() => {
            return true;
          }}
          views={["day", "month"]}
        ></CalendarPicker>
      </LocalizationProvider>
    </div>
  );
}

export default CalendarComp;
