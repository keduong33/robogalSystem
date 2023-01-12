// Any design applied here will be applied globally across all the pages

import "../styles/globals.css";
import "../styles/Calendar.css";
import { AuthContextProvider } from "../authentication/AuthContext";
import LogoBarComp from "../components/ReusableComps/LogoBarComp";

export default function App({ Component, pageProps }) {
  return (
    <div
      className="h-screen flex flex-col
        bg-gradient-to-br
        from-blue-100
        via-blue-300
        to-blue-400
        min-h-screen
        "
    >
      <AuthContextProvider>
        <div>
          <LogoBarComp />
        </div>
        <div className="px-10 pb-10 h-full">
          <Component {...pageProps} />
        </div>
      </AuthContextProvider>
    </div>
  );
}
