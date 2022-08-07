import { useEffect, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { UserContext } from "../context/UserContext";

const Homepage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const userData = { user, isAuthenticated, isLoading };
  const {
    actions: { receiveUserData },
  } = useContext(UserContext);
  console.log("userData", userData);
  useEffect(() => {
    console.log("userData in useEffect", userData);
    receiveUserData(userData);
  }, [user]);

  return (
    <>
      <h1>PriceSimple</h1>
      <p>Find the best prices on produce at your local grocery store</p>
      <button>Search by Item</button>
    </>
  );
};

export default Homepage;
