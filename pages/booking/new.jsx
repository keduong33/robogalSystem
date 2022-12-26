/*
Functionalities and Design of the Calendar Page
 */
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from "../../authentication/AuthContext";
import PageTitleComp from "../../components/ReusableComps/PageTitleComp";
import { isAuthenticated } from "../../components/SecurityCheck";
import BookingDateTimeComp from "../../components/NewBookingComp/BookingDateTimeComp";

function NewBooking() {
  // Basic authentication check
  const router = useRouter();
  const { user } = useAuth();
  const [lessonType, setLessonType] = useState();
  const [lessonTypePicked, setLessonTypPicked] = useState(false);

  if (!isAuthenticated(user)) {
    router.push("/login");
  }

  return (
    <div className="flex flex-col">
      {/* Page title */}
      {/* Replace Page Title and Description */}
      <div>
        <PageTitleComp
          pageTitle="Select New Booking"
          pageDescription="Choose a session to book"
          hasArrow={true}
        />
      </div>
      {!lessonTypePicked && (
        <div>
          <div>Here are the cards place.</div>
          <div>
            <button
              onClick={() => {
                setLessonTypPicked(true);
                console.log(lessonTypePicked);
              }}
            >
              Go to calendar
            </button>
          </div>
        </div>
      )}
      {lessonTypePicked && (
        <div>
          <BookingDateTimeComp />
        </div>
      )}
    </div>
  );
}

export default NewBooking;
