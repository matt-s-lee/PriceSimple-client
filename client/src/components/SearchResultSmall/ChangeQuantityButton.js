import styled from "styled-components";
import { IoAddSharp, IoRemoveOutline } from "react-icons/io5";

const ChangeQuantityButton = ({ numItems, setNumItems }) => {
  const onClickFunc = (ev, operation) => {
    ev.preventDefault();
    operation === "add" ? setNumItems(numItems + 1) : setNumItems(numItems - 1);
  };
  return (
    <ChangeQuantity>
      <button disabled={numItems < 1} onClick={onClickFunc}>
        <IoRemoveOutline />
      </button>
      <div>{numItems}</div>
      <button onClick={(ev) => onClickFunc(ev, "add")}>
        <IoAddSharp />
      </button>
    </ChangeQuantity>
  );
};

export default ChangeQuantityButton;

const ChangeQuantity = styled.div`
  display: flex;
`;
