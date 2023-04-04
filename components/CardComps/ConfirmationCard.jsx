import { Box, Modal, Typography } from "@mui/material";
import React from "react";

function ConfirmationCard() {
  return (
    <div>
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-100 border-2 border-black border-solid shadow-slate-50 p-4 w-full lg:w-[60em] xl:w-[70em] max-h-80  overflow-y-auto text-black flex-col">
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ alignSelf: "start" }}
          >
            {info.title}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, textAlign: "justify", alignSelf: "center" }}
          >
            {info.longDescription}
          </Typography>
          <button
            onClick={() => {
              router.push({
                pathname: "/new/details",
                query: {
                  templateID: info.id,
                  templateTitle: info.title,
                },
              });
            }}
            className="greenButton w-fit mt-4"
          >
            Select This Session
          </button>
        </Box>
      </Modal>
    </div>
  );
}

export default ConfirmationCard;
