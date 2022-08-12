import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { UserContext } from "../context/UserContext";

const Homepage = () => {
  let navigate = useNavigate();

  const onClickFunc = (ev) => {
    ev.preventDefault();
    navigate("/search");
  };
  return (
    <>
      <h1>PriceSimple</h1>
      <p>Find the best prices on produce at your local grocery store</p>
      <button onClick={onClickFunc}>Search by Item</button>
    </>
  );
};

export default Homepage;

  // const { user, isAuthenticated, isLoading } = useAuth0();
  // const userData = { user, isAuthenticated, isLoading };
  // const {
  //   state,
  //   actions: { receiveUserData },
  // } = useContext(UserContext);

  // const [profileCreated, setProfileCreated] = useState(false);

  // useEffect(() => {
  //   receiveUserData(user, isAuthenticated, isLoading);
  //   if (user) {
  //     fetch(`/profile/${user.sub}`, {
  //       method: "POST",
  //       body: JSON.stringify({
  //         _id: user.sub,
  //         email: user.email,
  //         name: user.name,
  //         picture: user.picture,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log("message", data.message);
  //         setProfileCreated(true);
  //       });
  //   }
  // }, [isAuthenticated]);
  // eslint-disable-next-line