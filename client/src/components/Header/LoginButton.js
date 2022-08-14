import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { IoMdLogIn } from "react-icons/io";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button onClick={() => loginWithRedirect()}>
      <IoMdLogIn />
    </Button>
  );
};

const Button = styled.button`
  font-size: 1.25em;
`;
export default LoginButton;
