// Any design applied here will be applied globally across all the pages

import "../styles/globals.css";
import { AuthContextProvider } from "../authentication/AuthContext";
import LogoBar from "../components/LogoBar";

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <div
        className="h-full flex flex-col
        bg-gradient-to-br
        from-blue-50
        via-blue-400
        to-blue-200
        min-h-screen"
      >
        <div>
          <LogoBar />
        </div>
        <div>
          <Component {...pageProps} />
        </div>
      </div>
    </AuthContextProvider>
  );
}
