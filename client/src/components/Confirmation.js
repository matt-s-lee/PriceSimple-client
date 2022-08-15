import { useState } from "react";
// import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";

export const Confirmation = ({ open, setOpen }) => {
  const handleClose = (ev, reason) => {
    if (reason === "clickaway") {
      return;
      setOpen(false);
    }

    return (
      <div>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} message="Closed" />
      </div>
    );
  };
};
