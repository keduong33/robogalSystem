import { useRouter } from "next/router";
import React from "react";
import { useAuth } from "../authentication/AuthContext";
import { isAuthenticated } from "../components/SecurityCheck";
import PageTitleComp from "../components/ReusableComps/PageTitleComp";
import { MdOutlineWavingHand } from "react-icons/md";
import BookingListComp from "../components/BookingListComp";

function Home() {
  const { user } = useAuth();
  const router = useRouter();

  // Basic authentication check
  if (!isAuthenticated(user)) {
    router.push("login");
  }

  return (
    <div>
      {/* Page Title Component --> Modify Title & Desc */}
      <div>
        <PageTitleComp
          pageTitle={
            <div className="flex">
              <div className="self-center">Welcome {user.email} </div>
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
      <div>
        <BookingListComp />
      </div>

      {/* Add new Booking */}
      <div>
        <button
          className="blueButton max-w-fit"
          onClick={() => {
            router.push("/booking/new");
          }}
        >
          New Booking
        </button>
      </div>
    </div>
  );
}

export default Home;
