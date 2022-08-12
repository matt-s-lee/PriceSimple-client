import { useContext, useEffect } from "react";

import { UserContext } from "../context/UserContext";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserCart } from "../helpers/getUserCart";

const BasketPage = () => {
  const { user, isAuthenticated } = useAuth0();
  const {
    actions: { updateUserCart },
  } = useContext(UserContext);

  useEffect(
    () => {
      if (isAuthenticated) {
        getUserCart(user.sub, updateUserCart);
      }
    }, // eslint-disable-next-line
    []
  );

  return <div>BasketPage</div>;
};

export default BasketPage;
