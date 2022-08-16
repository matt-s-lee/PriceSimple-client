import styled from "styled-components";
import Snackbar from "@mui/material/Snackbar";
import { IoIosClose } from "react-icons/io";

export const Confirmation = ({ open, setOpen }) => {
  const handleClose = (ev) => {
    setOpen(false);
  };

  const action = (
    <>
      <button onClick={handleClose}>
        <IoIosClose fontSize="20px" color="white" />
      </button>
    </>
  );

  return (
    <Wrapper>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Added to basket"
        action={action}
        sx={{ width: 200 }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 2em;
`;
