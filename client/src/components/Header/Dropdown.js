import { NavLink } from "react-router-dom";

import { IoClose } from "react-icons/io5";
import styled from "styled-components";

const Dropdown = ({ menuOpen, setMenuOpen }) => {
  const clickHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Menu open={menuOpen}>
      <Close>
        <IoClose onClick={clickHandler} />
      </Close>
      <Options to="search" onClick={clickHandler}>
        Search Item
      </Options>
      <Options to="compare" onClick={clickHandler}>
        Price History
      </Options>
      <Options to="basket" onClick={clickHandler}>
        Basket
      </Options>
      <Options to="about" onClick={clickHandler}>
        About
      </Options>
    </Menu>
  );
};

const Menu = styled.div`
  position: fixed; /* Stay in place */
  display: flex;
  flex-direction: column;
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  overflow: auto;
  background-color: black;
  opacity: ${(props) => (props.open === true ? "1" : "0")};
  height: ${(props) => (props.open === true ? "100%" : "0%")};
  transition: all 0.2s ease-out;
`;

const Close = styled.button`
  height: 10%;
  line-height: 5em;
  color: white;
  z-index: 5;
`;

const Options = styled(NavLink)`
  height: 10%;
  line-height: 5em;
  color: white;
  margin-left: 2em;
  font-family: var(--font-titles);
`;

// const Dialog = styled.div`
//   position: fixed;
//   left: 0;
//   top: 30%;
//   background-color: white;
//   border: 1px solid #888;
//   z-index: 2;
// `;

// const Text = styled.div`
//   padding: 20px;
// `;

export default Dropdown;
