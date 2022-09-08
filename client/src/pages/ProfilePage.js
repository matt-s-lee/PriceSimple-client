import { useAuth0 } from "@auth0/auth0-react";

import styled from "styled-components";

const ProfilePage = () => {
  const { user } = useAuth0();

  return (
    user && (
      <Wrapper>
        <Pic src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </Wrapper>
    )
  );
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
`;

const Pic = styled.img`
  border-radius: 50%;
  margin: 1em 0;
`;

export default ProfilePage;
