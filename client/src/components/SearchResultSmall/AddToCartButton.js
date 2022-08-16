import { useState, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import styled from "styled-components";

import LoginModal from "../LoginModal";
import { getUserCart } from "../../helpers/getUserCart";
import { UserContext } from "../../context/UserContext";
import { Confirmation } from "../Confirmation";

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
  const [open, setOpen] = useState(false);
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
          if (json.status === 200) {
            getUserCart(user.sub, updateUserCart);
            setOpen(!open);
          }
        });
    } else {
      setVisible(!visible);
    }
  };

  return (
    <>
      <Button onClick={onClickFunc}>Add to Basket</Button>
      {visible ? <LoginModal visible={visible} setVisible={setVisible} /> : null}
      <Confirmation open={open} setOpen={setOpen} />
    </>
  );
};

export const Button = styled.button`
  background: #4e5156;
  padding: 0.1em;
  color: white;
  border: 1px solid black;
  border-radius: 3px;
`;

export default ButtonAddToCart;
