/*
  The List of Booking page --> User can access it from their index or from /booking/list
*/

import React from "react";
import BookingListComp from "../../components/BookingComps/BookingListComp";
import { isAuthenticated } from "../../components/SecurityCheck";
import { useAuth } from "../../authentication/AuthContext";
import { useRouter } from "next/router";

function BookingList() {
  const { user } = useAuth();
  const router = useRouter();

  if (!isAuthenticated(user)) {
    router.push("/login");
  } else {
    return (
      <div className="border">
        <BookingListComp />
      </div>
    );
  }
}

export default BookingList;
