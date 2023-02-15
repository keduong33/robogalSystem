import React, { useState } from "react";
import GetDataListComp from "../ReusableComps/GetDataListComp";
import { useAuth } from "../../authentication/AuthContext";
import { useEffect } from "react";

function BookingListComp() {
  const { user } = useAuth();
  const [sessionList, setSession] = useState([""]);
  GetDataListComp("session", user).then((sessionList) => {
    setSession(sessionList);
  });
  return <div key="test">{sessionList[0].title}</div>;
}

export default BookingListComp;
