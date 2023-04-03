import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { TextField, useMediaQuery } from "@mui/material";
import TimeComp from "./TimeComp";

function BookingDetailsComp() {
  // Date Data
  const [date, setDate] = useState(null);

  // Time Data
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  // Session Data
  const [sessionType, setSessionType] = useState(null);

  // Location Data
  const [locationType, setLocationType] = useState(null);
  console.log(date);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* Components */}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:mx-5 lg:mx-60">
        <DatePicker
          value={date}
          onChange={setDate}
          label="Class Date"
          inputFormat="DD/MM/YYYY"
          renderInput={(params) => <TextField {...params} />}
          className="w-fit flex justify-self-center"
        />
        <TimeComp
          startTime={startTime}
          setStartTime={setStartTime}
          endTime={endTime}
          setEndTime={setEndTime}
          className="flex justify-self-center"
        />
      </div>
    </LocalizationProvider>
  );
}

export default BookingDetailsComp;
