// The main component when user creates a new booking --> it calls other smaller components
// gotta move this one later one
import React, { useState } from "react";
import AddDateComp from "./DetailComps/DateComp";
import AddTimeComp from "./TimeComp";
import AddSessionTypeComp from "./SessionTypeComp";
import AddLocationComp from "./LocationComp";
import ConfirmComp from "./ConfirmationComp";

function BookingDetailComp() {
  // Date Data
  const [date, setDate] = useState(null);
  const [datePicked, setDatePicked] = useState(false);

  // Time Data
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [timePicked, setTimePicked] = useState(false);

  // Session Data
  const [sessionType, setSessionType] = useState(null);

  // Location Data
  const [locationType, setLocationType] = useState(null);
  if (!open) return null;
  return (
    <div>
      {/* Components */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 grid-flow-row-dense mx-auto sm:mx-5 lg:mx-60">
        {/* Date Component */}
        <div className="w-fit col-span-2 mx-auto sm:col-span-1 ">
          <AddDateComp
            date={date}
            setDate={setDate}
            setDatePicked={setDatePicked}
          />
          <div className="text-center">
            The picked date is {date ? date.toDateString() : "No Date"}
          </div>
        </div>

        {/* Time Component */}
        {date && datePicked && (
          <div className="min-w-fit">
            <AddTimeComp
              startTime={startTime}
              endTime={endTime}
              setStartTime={setStartTime}
              setEndTime={setEndTime}
              setTimePicked={setTimePicked}
            />
          </div>
        )}

        {/* Session Type & Location Component */}
        {startTime && endTime && timePicked && (
          <div className="min-w-fit">
            <AddSessionTypeComp
              sessionType={sessionType}
              setSessionType={setSessionType}
            />
            <AddLocationComp
              locationType={locationType}
              setLocationType={setLocationType}
            />
          </div>
        )}
      </div>
      {/* Confirm Booking component */}
      {datePicked && timePicked && sessionType && locationType ? (
        <div>
          <ConfirmComp eligible={true} />
        </div>
      ) : (
        <div>
          <ConfirmComp eligible={false} />
        </div>
      )}
      ;
    </div>
  );
}

export default BookingDetailComp;
