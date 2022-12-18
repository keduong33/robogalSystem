/*
Functionalities and Design of the Calendar Page
 */

import dayjs from "dayjs";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from "../authentication/AuthContext";
import CalendarComp from "../components/CalendarComp";
import LogoBar from "../components/LogoBar";

function Calendar() {
  // Basic authentication check
  const router = useRouter();
  const { user } = useAuth();

  if (!user) {
    router.push("login");
  }

  // Functionalities
  const [date, setDate] = useState(dayjs());

  return (
    <div className="flex justify-between">
      <div className="bg-gray-500">
        <CalendarComp date={date} setDate={setDate} />
        <div className="text-center">
          The picked date is {date.format("DD/MM/YYYY")}
        </div>
      </div>
      <div>Another Calendar</div>
      <div>Another Calendar</div>
    </div>
  );
}

export default Calendar;
