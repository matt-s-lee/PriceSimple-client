import { useContext, useEffect } from "react";

import { ProductContext } from "../context/ProductContext";
import { UserContext } from "../context/UserContext";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserCart } from "../helpers/getUserCart";

import BasketResult from "../components/BasketResult";

const BasketPage = () => {
  const { user, isAuthenticated } = useAuth0();
  const {
    state,
    actions: { updateUserCart },
  } = useContext(UserContext);
  const userCart = state.userCart;

  useEffect(
    () => {
      if (isAuthenticated) {
        getUserCart(user.sub, updateUserCart);
      }
    }, // eslint-disable-next-line
    []
  );

  return (
    <div>
      {userCart &&
        userCart.map((item) => {
          return (
            <BasketResult
              key={item.productId}
              productId={item.productId}
              quantity={item.quantity}
            />
          );
        })}
    </div>
  );
};

export default BasketPage;
