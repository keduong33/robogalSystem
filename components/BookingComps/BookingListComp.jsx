import React, { useState } from "react";
import GetDataListComp from "../ReusableComps/GetDataListComp";
import { useAuth } from "../../authentication/AuthContext";
import { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function BookingListComp() {
  const { user } = useAuth();
  // const [sessionList, setSession] = useState([""]);

  // useEffect(() => {
  //   GetDataListComp("session", user).then((sessionList) => {
  //     setSession(sessionList);
  //   });
  // }, []);

  function createData(title, status, date, time, location) {
    return { title, status, date, time, location };
  }

  const sessionList = [
    createData("Intro 1", "Confirmed", "1/1/2001", "1AM-2AM", "Your primary"),
    createData("Intro 2", "Unconfirmed", "2/2/2002", "1AM-2AM", "Location"),
    createData("Lego", "Declined", "3/3/2003", "1AM-2AM", "Location"),
  ];

  return (
    // <div>
    //   {/* {sessionList.map((sessionObj) => (
    //     <div key={sessionObj.title}>{sessionObj.title}</div>
    //   ))} */}
    //   <Table></Table>
    // </div>
    <TableContainer className="min-w-fit max-w-screen-xl">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow sx={{ border: 0 }}>
            <TableCell>Session Name</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Date&nbsp;</TableCell>
            <TableCell align="right">Time&nbsp;</TableCell>
            <TableCell align="right">Location&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sessionList.map((sessionObj) => (
            <TableRow key={sessionObj.title} sx={{ border: 0 }}>
              <TableCell component="th" scope="row">
                {sessionObj.title}
              </TableCell>
              <TableCell align="right">{sessionObj.status}</TableCell>
              <TableCell align="right">{sessionObj.date}</TableCell>
              <TableCell align="right">{sessionObj.time}</TableCell>
              <TableCell align="right">{sessionObj.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BookingListComp;
