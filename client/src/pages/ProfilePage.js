import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const ProfilePage = () => {
  const { state } = useContext(UserContext);
  const user = state.currentUser;

  return (
    state.currentUser && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default ProfilePage;
