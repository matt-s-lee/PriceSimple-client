import { useContext, useEffect, useState } from "react";

import { UserContext } from "../context/UserContext";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserCart } from "../helpers/getUserCart";

import LoginModal from "../components/LoginModal";
import SearchResultSmall from "../components/SearchResultSmall";

const BasketPage = () => {
  const { user, isAuthenticated } = useAuth0();
  const {
    state,
    actions: { updateUserCart },
  } = useContext(UserContext);
  const userCart = state.userCart;
  const [remove, setRemove] = useState(true);

  useEffect(
    () => {
      if (isAuthenticated) {
        getUserCart(user.sub, updateUserCart);
      }
    }, // eslint-disable-next-line
    []
  );

  if (userCart) {
    return (
      <>
        <h2>YOUR BASKET</h2>
        <div>
          {userCart.map((item) => {
            return (
              <SearchResultSmall
                remove={remove}
                key={item.productId}
                id={item.productId}
                quantity={item.quantity}
                product={item.product}
                soldByPackage={item.soldByPackage}
                soldByWeight={item.soldByWeight}
                soldIndividually={item.soldIndividually}
                store={item.store}
                imgSrc={item.imgSrc}
                link={item.link}
              />
            );
          })}
        </div>
      </>
    );
  } else {
    return <LoginModal />;
  }
};

export default BasketPage;
