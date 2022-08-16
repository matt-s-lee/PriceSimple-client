import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { IoClose } from "react-icons/io5";

import styled from "styled-components";

const LoginModal = ({ visible, setVisible }) => {
  const { loginWithRedirect } = useAuth0();
  console.log(visible);

  const handleExit = (ev) => {
    ev.preventDefault();
    setVisible(!visible);
  };

  return (
    <>
      <Background onClick={handleExit}></Background>
      <Dialog>
        <IoClose onClick={handleExit} />
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
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 0;
  top: 30%;
  background-color: white;
  border: 1px solid #888;
  border-radius: 5px;
  z-index: 2;
  margin: 0 5em;
  padding: 1em;
  @media only screen and (min-width: 800px) {
    left: 23%;
  }
`;

const Text = styled.div`
  text-align: center;
  padding: 1em;
`;

export default LoginModal;
