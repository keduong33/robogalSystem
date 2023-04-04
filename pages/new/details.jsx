import React, { useEffect } from "react";
import { useAuth } from "../../authentication/AuthContext";
import { useRouter, withRouter } from "next/router";
import PageTitleComp from "../../components/utilities/PageTitle";
import BookSession from "../../components/BookingComps/BookSession";
import { isAuthenticated } from "../../components/SecurityCheck";

function AddDetails(props) {
  const { user } = useAuth();
  const router = useRouter();
  const pageTitle = props.router.query.templateTitle;

  if (!isAuthenticated(user)) {
    router.push("/login");
  } else {
    return (
      <div>
        <PageTitleComp
          hasArrow={true}
          pageTitle={pageTitle}
          pageDescription={
            "Please select a datetime and location for your session"
          }
        />
        <BookSession />
      </div>
    );
  }
}

export default withRouter(AddDetails);
