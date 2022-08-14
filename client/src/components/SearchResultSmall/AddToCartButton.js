import { useState, useContext } from "react";
import LoginModal from "../LoginModal";

import { useAuth0 } from "@auth0/auth0-react";

import { getUserCart } from "../../helpers/getUserCart";
import { UserContext } from "../../context/UserContext";

const ButtonAddToCart = ({
  product,
  soldByPackage,
  soldByWeight,
  soldIndividually,
  store,
  imgSrc,
  link,
  id,
  numItems,
}) => {
  const {
    actions: { updateUserCart },
  } = useContext(UserContext);
  const [visible, setVisible] = useState(false);
  const { user, isAuthenticated } = useAuth0();
  const onClickFunc = (ev) => {
    ev.preventDefault();
    if (isAuthenticated) {
      fetch(`http://localhost:8000/current-cart/${user.sub}/add-item`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: id,
          quantity: numItems,
          product,
          soldByPackage,
          soldByWeight,
          soldIndividually,
          store,
          imgSrc,
          link,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log("JSON", json);
          if (json.status === 200) {
            getUserCart(user.sub, updateUserCart);
          }
        });
    } else {
      setVisible(!visible);
    }
  };

  return (
    <>
      <button onClick={onClickFunc}>Add to Cart</button>
      {visible ? <LoginModal visible={visible} setVisible={setVisible} /> : null}
    </>
  );
};

export default ButtonAddToCart;
