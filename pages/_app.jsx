// Any design applied here will be applied globally across all the pages

import "../styles/globals.css";
import "../styles/Calendar.css";
import { AuthContextProvider } from "../authentication/AuthContext";
import LogoBarComp from "../components/ReusableComps/LogoBarComp";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { isAuthenticated } from "../components/SecurityCheck";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  let user = null;

  // Basic authentication check
  useEffect(() => {
    if (router.pathname == "/register" && !isAuthenticated(user)) {
      router.push("/register");
    } else if (router.pathname != "/login" && !isAuthenticated(user)) {
      router.push("/login");
    }
  }, []);

  return (
    <div
      className="h-full flex flex-col
        bg-gradient-to-br
        from-blue-50
        via-blue-400
        to-blue-200
        min-h-screen
        "
    >
      <AuthContextProvider>
        <div>
          <LogoBarComp />
        </div>
        <div className="px-10 pb-5">
          <Component {...pageProps} />
        </div>
      </AuthContextProvider>
    </div>
  );
}
