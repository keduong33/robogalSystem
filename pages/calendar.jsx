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
    <div>
      <CalendarComp date={date} setDate={setDate} />
    </div>
  );
}

export default Calendar;
