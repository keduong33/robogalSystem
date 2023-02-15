import React, { useState } from "react";
import GetDataListComp from "../ReusableComps/GetDataListComp";
import { useAuth } from "../../authentication/AuthContext";
import { useEffect } from "react";

function BookingListComp() {
  const { user } = useAuth();
  let sessionList = GetDataListComp("session", user);

  return <div>Booking</div>;
}

export default BookingListComp;
