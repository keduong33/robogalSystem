import React, { useState } from "react";
import GetDataListComp from "../ReusableComps/GetDataListComp";
import { useAuth } from "../../authentication/AuthContext";
import { useEffect } from "react";
import {
  Box,
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
  //   async function fetchSessionList() {
  //     const sessions = await GetDataListComp("session", user);
  //     setSession(sessions);
  //   }
  //   fetchSessionList();
  // }, [user]);

  function createData(title, status, date, time, location) {
    return { title, status, date, time, location };
  }

  const sessionList = [
    createData("Intro 1", "Confirmed", "1/1/2001", "1AM-2AM", "Your primary"),
    createData("Intro 2", "Pending", "2/2/2002", "1AM-2AM", "Location"),
    createData("Lego", "Declined", "3/3/2003", "1AM-2AM", "Location"),
    createData("Lego", "Declined", "3/3/2003", "1AM-2AM", "Location"),
    createData("Lego", "Declined", "3/3/2003", "1AM-2AM", "Location"),
    createData("Lego", "Declined", "3/3/2003", "1AM-2AM", "Location"),
    createData("Lego", "Declined", "3/3/2003", "1AM-2AM", "Location"),
    createData("Lego", "Declined", "3/3/2003", "1AM-2AM", "Location"),
    createData("Lego", "Declined", "3/3/2003", "1AM-2AM", "Location"),
    createData("Lego", "Declined", "3/3/2003", "1AM-2AM", "Location"),
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmed":
        return "#E3F2FE"; //blue
      case "Pending":
        return "#DDDDDD"; //grey
      case "Declined":
        return "#EBCCCC"; //pink
      default:
        return "transparent";
    }
  };

  const NormalTableCell = ({ value }) => {
    return (
      <TableCell sx={{ borderBottom: "transparent" }} align="right">
        {value}
      </TableCell>
    );
  };
  let count = 0;
  return (
    <TableContainer
      className="w-full sm:max-w-screen-xl mx-auto"
      sx={{ maxHeight: "500px", marginBottom: 5 }}
    >
      <Table
        aria-label="Booking list"
        className="h-fit"
        sx={{ borderCollapse: "separate", borderSpacing: "0 10px" }}
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ borderBottom: "transparent" }}>
              Session Name
            </TableCell>
            <NormalTableCell value={"Status"} />
            <NormalTableCell value={"Date"} />
            <NormalTableCell value={"Time"} />
            <NormalTableCell value={"Location"} />
          </TableRow>
        </TableHead>
        <TableBody>
          {sessionList.map((sessionObj) => (
            <TableRow
              key={count++}
              sx={{
                backgroundColor: getStatusColor(sessionObj.status),
                marginBottom: "10px",
              }}
            >
              <TableCell
                sx={{
                  borderBottom: "transparent",
                  borderTopLeftRadius: 20,
                  borderBottomLeftRadius: 20,
                }}
              >
                {sessionObj.title}
              </TableCell>
              <NormalTableCell value={sessionObj.status} />
              <NormalTableCell value={sessionObj.date} />
              <NormalTableCell value={sessionObj.time} />
              <TableCell
                sx={{
                  borderBottom: "transparent",
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                }}
                align="right"
              >
                {sessionObj.location}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BookingListComp;
