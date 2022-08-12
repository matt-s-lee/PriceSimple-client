import { useState } from "react";
import LoginModal from "../LoginModal";

import { useAuth0 } from "@auth0/auth0-react";

const ButtonAddToCart = ({ id, numItems }) => {
  const [visible, setVisible] = useState(false);
  const { user, isAuthenticated } = useAuth0();
  console.log(user, isAuthenticated);
  const onClickFunc = (ev) => {
    ev.preventDefault();
    if (isAuthenticated) {
      fetch(`/current-cart/${user.sub}/add-item`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: user.sub,
          items: [{ productId: id, quantity: numItems }],
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
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
