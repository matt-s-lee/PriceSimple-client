import { FiLogOut } from "react-icons/fi";
import { useAuth0 } from "@auth0/auth0-react";

import styled from "styled-components";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      <FiLogOut />
      <Logout>Logout</Logout>
    </button>
  );
};

const Logout = styled.div`
  position: absolute;
  color: black;
  visibility: hidden;
  &:hover {
    visibility: visible;
  }
`;

export default LogoutButton;
