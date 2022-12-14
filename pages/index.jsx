import { useRouter } from "next/router";
import React from "react";
import { useAuth } from "../authentication/AuthContext";
import Test from "./testsite";

function Home() {
  const { user } = useAuth();
  const router = useRouter();

  // Basic authentication check
  if (!user) {
    router.push("login");
  }

  return <Test />;
}

export default Home;
