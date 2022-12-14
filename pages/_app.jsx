// Any design applied here will be applied globally across all the pages

import "../styles/globals.css";
import { AuthContextProvider } from "../authentication/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
