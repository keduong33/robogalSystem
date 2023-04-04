// Any design applied here will be applied globally across all the pages

import "../styles/globals.css";
import "../styles/Calendar.css";
import { AuthContextProvider } from "../authentication/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { SecurityCheck } from "../components/SecurityCheck";
import LogoBar from "../components/utilities/LogoBar";

export default function App({ Component, pageProps }) {
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
          <LogoBar />
        </div>
        <div className="px-10 pb-5">
          <Component {...pageProps} />
        </div>
      </AuthContextProvider>
    </div>
  );
}

// className="h-full flex flex-col
// bg-gradient-to-br
// from-blue-50
// via-blue-400
// to-blue-200
// min-h-screen
