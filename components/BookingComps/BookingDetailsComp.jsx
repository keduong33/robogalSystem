import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import TimeComp from "./TimeComp";
import LocationComp from "./LocationComp";
import SessionTypeComp from "./SessionTypeComp";
import ConfirmComp from "./ConfirmationComp";

function BookingDetailsComp() {
  // Date Data
  const [date, setDate] = useState(null);

  // Time Data
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  // Session Data
  const [sessionType, setSessionType] = useState(null);

  // Location Data
  const [location, setLocation] = useState(null);

  const isEligible = () => {
    return (
      date != null &&
      startTime != null &&
      endTime != null &&
      ((sessionType === "In Person" && location != null) ||
        sessionType === "Virtual")
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* Components */}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:mx-5 lg:mx-60">
        <DatePicker
          value={date}
          onChange={setDate}
          disablePast
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
        />
        <SessionTypeComp
          sessionType={sessionType}
          setSessionType={setSessionType}
        />
        {sessionType === "In Person" && (
          <LocationComp location={location} setLocation={setLocation} />
        )}

        <ConfirmComp eligible={isEligible()} />
      </div>
    </LocalizationProvider>
  );
}

export default BookingDetailsComp;
