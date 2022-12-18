/*
Functionalities and Design of the Calendar Page
 */
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from "../authentication/AuthContext";
import CalendarComp from "../components/CalendarComp";

function Calendar() {
  // Basic authentication check
  const router = useRouter();
  const { user } = useAuth();

  if (!user) {
    router.push("login");
  }

  // Functionalities
  const [date, setDate] = useState(new Date());

  return (
    <div className="flex justify-between">
      <div className="bg-gray-500">
        <CalendarComp date={date} setDate={setDate} />
        <div className="text-center">
          The picked date is {date ? date.toDateString() : "No Date"}
        </div>
      </div>
      {date ? <div>Yes</div> : <div>No</div>}
    </div>
  );
}

export default Calendar;
