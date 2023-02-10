import React from "react";
import GetDataListComp from "../ReusableComps/GetDataListComp";
import { useAuth } from "../../authentication/AuthContext";

function BookingListComp() {
  const { user } = useAuth();
  let bookingList = GetDataListComp("session", user);

  return <div>Booking</div>;
}

export default BookingListComp;
