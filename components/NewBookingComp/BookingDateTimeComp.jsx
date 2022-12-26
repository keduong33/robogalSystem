import React, { useState } from "react";
import AddDateComp from "../../components/NewBookingComp/AddBookingComp/AddDateComp";
import AddTimeComp from "../../components/NewBookingComp/AddBookingComp/AddTimeComp";
import AddSessionTypeComp from "../../components/NewBookingComp/AddBookingComp/AddSessionTypeComp";
import AddLocationComp from "../../components/NewBookingComp/AddBookingComp/AddLocationComp";
import ConfirmComp from "../../components/NewBookingComp/AddBookingComp/ConfirmComp";

function BookingDateTimeComp() {
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
  return (
    <div>
      {/* Adding Components */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 grid-flow-row-dense mx-auto sm:mx-5 lg:mx-60">
        {/* Date Component */}
        <div className="min-w-fit max-w-fit col-span-2 mx-auto sm:col-span-1 ">
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

export default BookingDateTimeComp;
