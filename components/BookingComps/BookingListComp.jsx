import React from "react";
import GetDataListComp from "../ReusableComps/GetDataListComp";

function BookingListComp() {
  let bookingList = GetDataListComp("session", "Bensua School");

  return <div>Booking</div>;
}

export default BookingListComp;
