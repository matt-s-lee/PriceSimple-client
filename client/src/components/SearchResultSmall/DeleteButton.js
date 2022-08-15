import { useContext, useEffect } from "react";
import { Button } from "./AddToCartButton";
import { useAuth0 } from "@auth0/auth0-react";

import { UserContext } from "../../context/UserContext";
import { getUserCart } from "../../helpers/getUserCart";

const DeleteButton = ({ id }) => {
  const {
    actions: { updateUserCart },
  } = useContext(UserContext);
  const { user } = useAuth0();

  const handleRemove = () => {
    if (user) {
      fetch(`/current-cart/${user.sub}/remove-item`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: user.sub,
          item: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          getUserCart(user.sub, updateUserCart);
        });
    }
  };

  return <Button onClick={handleRemove}>Remove from cart</Button>;
};

export default DeleteButton;
