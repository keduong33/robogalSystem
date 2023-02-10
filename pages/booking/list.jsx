/*
  The List of Booking page --> User can access it from their index or from /booking/list
*/

import React from "react";
import BookingListComp from "../../components/BookingComps/BookingListComp";

function BookingList() {
  return (
    <div className="border">
      <BookingListComp />
    </div>
  );
}

export default BookingList;
