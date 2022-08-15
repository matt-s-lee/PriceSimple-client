import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { IoAddSharp, IoRemoveOutline } from "react-icons/io5";
import { UserContext } from "../../context/UserContext";

const ChangeQuantityButton = ({ numItems, setNumItems, remove, id }) => {
  const { state } = useContext(UserContext);
  const userCart = state.userCart;
  const [quantity, setQuantity] = useState();

  const onClickFunc = (ev, operation) => {
    ev.preventDefault();
    operation === "add" ? setNumItems(numItems + 1) : setNumItems(numItems - 1);
  };

  useEffect(() => {
    if (remove) {
      const match = userCart.filter((item) => {
        return item.productId === id;
      });
      console.log(match.quantity);
      setQuantity(match[0].quantity);
    }
  }, [setQuantity]);

  return (
    <Wrapper>
      <Button disabled={numItems < 1} onClick={onClickFunc}>
        <IoRemoveOutline />
      </Button>
      {remove ? <div>{quantity}</div> : <Count>{numItems}</Count>}
      <Button onClick={(ev) => onClickFunc(ev, "add")}>
        <IoAddSharp />
      </Button>
    </Wrapper>
  );
};

export default ChangeQuantityButton;

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 1em;
`;

const Count = styled.div`
  /* margin:  */
  width: 2em;
  text-align: center;
`;

const Button = styled.button`
  background: #f7dada;
  padding: 0.1em;
`;
