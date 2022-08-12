import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { RiCloseCircleLine } from "react-icons/ri";

import styled from "styled-components";

const LoginModal = ({ visible, setVisible }) => {
  const { loginWithRedirect } = useAuth0();

  const handleExit = (ev) => {
    ev.preventDefault();
    setVisible(!visible);
  };

  return (
    <>
      <Background onClick={handleExit}></Background>
      <Dialog>
        <RiCloseCircleLine onClick={handleExit} />
        <Text>
          Only members can add items to the cart! Please{" "}
          <button onClick={() => loginWithRedirect()}>sign-in or sign-up</button>
        </Text>
      </Dialog>
    </>
  );
};

const Background = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

const Dialog = styled.div`
  position: fixed;
  left: 0;
  top: 30%;
  background-color: white;
  border: 1px solid #888;
  z-index: 2;
`;

const Text = styled.div`
  padding: 20px;
`;

export default LoginModal;
