/*
  Component that has session templates for user to choose
 */
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from "../../authentication/AuthContext";
import PageTitleComp from "../../components/utilities/PageTitleComp";
import { isAuthenticated } from "../../components/SecurityCheck";
import SessionTemplateListComp from "../../components/CardComp/SessionListTemplateComp";

function NewBooking() {
  const router = useRouter();
  const { user } = useAuth();

  if (!isAuthenticated(user)) {
    router.push("/login");
  } else {
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
          <SessionTemplateListComp />
        </div>
      </div>
    );
  }
}

export default NewBooking;
