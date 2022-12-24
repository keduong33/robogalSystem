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

function AddBooking() {
  // Basic authentication check
  const router = useRouter();
  const { user } = useAuth();

  if (!user) {
    router.push("login");
  }

  // Functionalities
  const [date, setDate] = useState(null);
  const [datePicked, setDatePicked] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [timePicked, setTimePicked] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Page title */}
      <div>
        <PageTitleComp />
      </div>

      {/* Adding Components */}
      <div className="grid grid-cols-3 mx-auto">
        {/* Date Component */}
        <div className="max-w-full ">
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

        {startTime && endTime && timePicked && <AddSessionTypeComp />}
      </div>
    </div>
  );
}

export default AddBooking;
