/*
  Component that has session templates for user to choose
 */
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from "../../authentication/AuthContext";
import PageTitleComp from "../../components/ReusableComps/PageTitleComp";
import { isAuthenticated } from "../../components/SecurityCheck";
import SessionListComp from "../../components/CardComp/SessionListComp";

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
    <div className="flex flex-col h-full">
      {/* Page title */}
      {/* Replace Page Title and Description to customize */}
      <div>
        <PageTitleComp
          pageTitle="Select New Booking"
          pageDescription="Choose a session to book"
          hasArrow={true}
        />
      </div>

      <div className="h-full pt-4 w-full">
        <SessionListComp />
      </div>
    </div>
  );
}

export default NewBooking;
