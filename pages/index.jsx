import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from "../authentication/AuthContext";
import PageTitleComp from "../components/ReusableComps/PageTitleComp";
import { MdOutlineWavingHand } from "react-icons/md";
import BookingDetailComp from "../components/BookingComps/BookingDetail";
import BookingList from "./booking/list";
import { isAuthenticated } from "../components/SecurityCheck";
import BookingListComp from "../components/BookingComps/BookingListComp";

function Home() {
  const { user } = useAuth();
  const router = useRouter();
  const [test, setTest] = useState(false);

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
              router.push("/booking/new");
            }}
          >
            Create New Booking
          </button>
          <br></br>
          <button
            className="blueButton max-w-fit"
            onClick={() => setTest(!test)}
          >
            Test Booking DateTime Comp
          </button>
          {test && <BookingDetailComp />}
        </div>
      </div>
    );
  }
}

export default Home;
