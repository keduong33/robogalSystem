import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from "../authentication/AuthContext";
import { MdOutlineWavingHand } from "react-icons/md";
import { isAuthenticated } from "../components/SecurityCheck";
import BookingListComp from "../components/BookingComps/BookingListComp";
import PageTitleComp from "../components/utilities/PageTitleComp";

function Home() {
  const { user } = useAuth();
  const router = useRouter();

  if (!isAuthenticated(user)) {
    router.push("/login");
  } else {
    return (
      <div>
        {/* Page Title Component --> Modify Title & Desc to customize*/}
        <div>
          <PageTitleComp
            pageTitle={
              <div className="flex">
                <div className="self-center">Welcome {user?.email}! </div>
                <MdOutlineWavingHand size={50} />
              </div>
            }
            pageDescription={
              "Manage your existing bookings below or make a new booking"
            }
            hasArrow={false}
          />
        </div>

        {/* List of bookings */}
        <div className="flex">
          <BookingListComp />
        </div>

        {/* Add new Booking */}
        <div className="flex justify-center">
          <button
            className="blueButton max-w-fit"
            onClick={() => {
              router.push("/new/session");
            }}
          >
            Create New Booking
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
