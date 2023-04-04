import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import PickTime from "./PickTime";
import PickLocation from "./PickLocation";
import PickSessionType from "./PickSessionType";
import ConfirmSession from "./ConfirmSession";
import dayjs from "dayjs";

function BookSession({ user }) {
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
      ((sessionType === "In Person" && location != "Virtual") ||
        sessionType === "Virtual") &&
      dayjs(startTime) < dayjs(endTime)
    );
  };

  const bookingInfo = {
    date: date,
    startTime: startTime,
    endTime: endTime,
    sessionType: sessionType,
    location: location,
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
        <PickTime
          startTime={startTime}
          setStartTime={setStartTime}
          endTime={endTime}
          setEndTime={setEndTime}
        />
        <PickSessionType
          sessionType={sessionType}
          setSessionType={setSessionType}
          setLocation={setLocation}
        />
        {sessionType === "In Person" && (
          <PickLocation location={location} setLocation={setLocation} />
        )}

        <ConfirmSession
          eligible={isEligible()}
          bookingInfo={bookingInfo}
          user={user}
        />
      </div>
    </LocalizationProvider>
  );
}

export default BookSession;
