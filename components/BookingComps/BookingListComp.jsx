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
import { BorderBottom } from "@mui/icons-material";

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
    createData("Intro 2", "Pending", "2/2/2002", "1AM-2AM", "Location"),
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

  return (
    // <div>
    //   {/* {sessionList.map((sessionObj) => (
    //     <div key={sessionObj.title}>{sessionObj.title}</div>
    //   ))} */}
    //   <Table></Table>
    // </div>
    <TableContainer className="min-w-fit max-w-screen-xl max-h-80">
      <Table aria-label="Booking list" className="h-fit">
        <TableHead stickyHeader>
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
              key={sessionObj.title}
              sx={{
                backgroundColor: getStatusColor(sessionObj.status),
              }}
            >
              <TableCell
                sx={{
                  borderBottom: "transparent",
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
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
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
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
