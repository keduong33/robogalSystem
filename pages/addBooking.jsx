/*
Functionalities and Design of the Calendar Page
 */
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from "../authentication/AuthContext";
import AddDateComp from "../components/AddBookingComp/AddDateComp";
import PageTitleComp from "../components/ReusableComps/PageTitleComp";
import AddTimeComp from "../components/AddBookingComp/AddTimeComp";
import AddSessionTypeComp from "../components/AddBookingComp/AddSessionTypeComp";
import AddLocationComp from "../components/AddBookingComp/AddLocationComp";
import ConfirmComp from "../components/AddBookingComp/ConfirmComp";

function AddBooking() {
  // Basic authentication check
  const router = useRouter();
  const { user } = useAuth();

  if (!user) {
    router.push("login");
  }

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
    <div className="flex flex-col">
      {/* Page title */}
      {/* Replace Page Title and Description */}
      <div>
        <PageTitleComp
          pageTitle="Add booking"
          pageDescription="Page for booking"
        />
      </div>

      {/* Adding Components */}
      <div className="grid grid-cols-3 gap-3 mx-auto">
        {/* Date Component */}
        <div>
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
          <AddTimeComp
            startTime={startTime}
            endTime={endTime}
            setStartTime={setStartTime}
            setEndTime={setEndTime}
            setTimePicked={setTimePicked}
          />
        )}

        {/* Session Type & Location Component */}
        {startTime && endTime && timePicked && (
          <div>
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
    </div>
  );
}

export default AddBooking;
