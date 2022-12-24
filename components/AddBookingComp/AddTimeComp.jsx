import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useState } from "react";
import { TextField, formControlClasses } from "@mui/material";

function AddTimeComp({
  startTime,
  setStartTime,
  endTime,
  setEndTime,
  setTimePicked,
}) {
  const [startTimeFormatError, setStartTimeFormatError] = useState(false);
  const [startTimeMinuteStepError, setStartTimeMinuteStepError] =
    useState(false);
  const [endTimeMinTimeError, setEndTimeMinTimeError] = useState(false);
  const [endTimeMinuteStepError, setEndTimeMinuteStepError] = useState(false);
  const [endTimeFormatError, setEndTimeFormatError] = useState(false);
  return (
    <div>
      <div className="flex flex-col flex-wrap items-end">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* Start time */}
          <div className="mb-5">
            <TimePicker
              showToolbar={false}
              label="Start Time"
              value={startTime}
              minutesStep={5}
              onChange={(newTime) => {
                setStartTimeFormatError(false);
                setStartTimeMinuteStepError(false);
                setStartTime(newTime);
              }}
              onError={(reason, value) => {
                if (reason == "minutesStep") {
                  setStartTimeMinuteStepError(true);
                } else if (reason == "invalidDate") {
                  setStartTimeFormatError(true);
                }
              }}
              renderInput={(params) => (
                <TextField
                  error={startTimeFormatError || startTimeMinuteStepError}
                  helperText={
                    startTimeMinuteStepError
                      ? "Minute must be in 5, 10 ,15 format"
                      : startTimeFormatError
                      ? "Time Format: hh/mm (A|P)M"
                      : null
                  }
                  {...params}
                  inputProps={{
                    ...params.inputProps,
                    placeholder: "hh/mm (A|P)M",
                  }}
                />
              )}
            />
          </div>

          {/* End time */}
          <div className="">
            <TimePicker
              showToolbar={false}
              label="End Time"
              value={endTime}
              minutesStep={5}
              minTime={startTime}
              onChange={(newTime) => {
                setEndTimeMinTimeError(false);
                setEndTimeMinuteStepError(false);
                setEndTimeFormatError(false);
                setEndTime(newTime);
              }}
              onError={(reason, value) => {
                if (reason == "minTime") {
                  setEndTimeMinTimeError(true);
                } else if (reason == "minutesStep") {
                  setEndTimeMinuteStepError(true);
                } else if (reason == "invalidDate") {
                  setEndTimeFormatError(true);
                }
              }}
              renderInput={(params) => (
                <TextField
                  error
                  helperText={
                    endTimeMinTimeError
                      ? "End Time must be after Start Time"
                      : endTimeMinuteStepError
                      ? "Minute must be in 5, 10 ,15 format"
                      : endTimeFormatError
                      ? "Time Format: hh/mm (A|P)M"
                      : null
                  }
                  {...params}
                  inputProps={{
                    ...params.inputProps,
                    placeholder: "hh/mm (A|P)M",
                  }}
                />
              )}
            />
          </div>
        </LocalizationProvider>
        {/* Button */}
        <div className="self-end">
          <button
            className="blueButton"
            onClick={() => {
              setTimePicked(true);
            }}
          >
            Choose Time
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTimeComp;
