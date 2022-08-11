// import { useContext } from "react";
// import { UserContext } from "../context/UserContext";

import { useAuth0 } from "@auth0/auth0-react";

const ProfilePage = () => {
  // const { state } = useContext(UserContext);
  // const user = state.currentUser;
  const { user } = useAuth0();

  return (
    user && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default ProfilePage;
