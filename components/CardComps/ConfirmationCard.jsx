import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import SaveNewSession from "../utilities/SaveNewSession";

function ConfirmationCard({
  isConfirmCardOpen,
  setIsConfirmCardOpen,
  bookingInfo,
}) {
  const template = JSON.parse(sessionStorage.getItem("currentTemplate"));
  const completeSessionInfo = {
    title: template.title,
    shortDescription: template.shortDescription,
    date: bookingInfo.date.format("DD/MM/YY"),
    startTime: bookingInfo.startTime.format("h:mm A"),
    endTime: bookingInfo.endTime.format("h:mm A"),
    sessionType: bookingInfo.sessionType,
    location: bookingInfo.location,
  };

  return (
    <div>
      <Modal
        open={isConfirmCardOpen}
        onClose={() => setIsConfirmCardOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-100 border-2 border-black border-solid shadow-slate-50 p-4 w-full lg:w-[60em] xl:w-[70em] max-h-80  overflow-y-auto text-black flex-col">
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontStyle: "italic",
              fontWeight: "light",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Please confirm the details
          </Typography>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            sx={{ alignSelf: "start" }}
          >
            {completeSessionInfo.title}
          </Typography>
          <Typography
            id="modal-modal-description"
            component="div"
            sx={{
              textAlign: "justify",
              alignSelf: "center",
              backgroundColor: "transparent",
              color: "black",
            }}
          >
            <Typography className="mt-2" component="div">
              <AccessTimeFilledIcon /> {completeSessionInfo.startTime} -{" "}
              {completeSessionInfo.endTime}, {completeSessionInfo.date}
            </Typography>

            <Typography component="div">
              <PlaceIcon />{" "}
              {completeSessionInfo.location == null
                ? "Virtual"
                : completeSessionInfo.location}
            </Typography>

            <Typography component="h3" sx={{ fontWeight: "bold", mt: 2 }}>
              Description
            </Typography>

            <Typography component="div">
              {completeSessionInfo.shortDescription}
            </Typography>
          </Typography>
          <button
            onClick={() => {
              SaveNewSession(completeSessionInfo);
            }}
            className="greenButton w-fit mt-4"
          >
            Confirm
          </button>
        </Box>
      </Modal>
    </div>
  );
}

export default ConfirmationCard;
