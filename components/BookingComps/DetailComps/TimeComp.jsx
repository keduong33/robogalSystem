import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useState } from "react";
import { TextField } from "@mui/material";

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
  let warning = false;

  /*---------------------------------------------*/
  const checkValidTime = () => {
    let validTime = true;
    if (startTime >= endTime) {
      validTime = false;
      setTimePicked(false);
    } else {
      warning = false;
    }
    return validTime;
  };

  return (
    <div>
      <div className="flex flex-col flex-wrap items-center lg:items-end">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* Start time picker */}
          <div className="mb-5">
            <TimePicker
              label="Start Time"
              value={startTime}
              minutesStep={5}
              onChange={(newTime) => {
                setStartTimeFormatError(false);
                setStartTimeMinuteStepError(false);
                setStartTime(newTime);
                checkValidTime();
              }}
              onClose={() => {
                checkValidTime();
              }}
              onError={(reason, value) => {
                if (reason == "minutesStep") {
                  setStartTimeMinuteStepError(true);
                  setValidTime(false);
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

          {/* End time picker*/}
          <div className="">
            <TimePicker
              label="End Time"
              value={endTime}
              minutesStep={5}
              minTime={startTime}
              onChange={(newTime) => {
                setEndTimeMinTimeError(false);
                setEndTimeMinuteStepError(false);
                setEndTimeFormatError(false);
                setEndTime(newTime);
                checkValidTime();
              }}
              onClose={() => {
                checkValidTime();
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

        {/* Set Time Button */}
        <div className="lg:self-end">
          <button
            className="blueButton"
            onClick={() => {
              if (checkValidTime()) {
                warning = false;
                setTimePicked(true);
              } else {
                warning = true;
                setTimePicked(false);
              }
            }}
          >
            Set Time
          </button>
        </div>

        {/* Helper text */}
        {warning && (
          <div className="text-red-600">
            Please pick appropriate Start and End Time
          </div>
        )}
      </div>
    </div>
  );
}

export default AddTimeComp;
