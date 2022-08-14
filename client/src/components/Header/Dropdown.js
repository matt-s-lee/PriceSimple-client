import { NavLink } from "react-router-dom";

import { GrFormClose } from "react-icons/gr";
import styled from "styled-components";

const Dropdown = ({ menuOpen, setMenuOpen }) => {
  const clickHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Menu open={menuOpen}>
      <Close>
        <GrFormClose onClick={clickHandler} />
      </Close>
      <Options to="search" onClick={clickHandler}>
        Search Item
      </Options>
      <Options to="basket" onClick={clickHandler}>
        Basket
      </Options>
      <Options to="" onClick={clickHandler}>
        About
      </Options>
      <Options to="profile" onClick={clickHandler}>
        Profile
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
  background-color: white;
  opacity: ${(props) => (props.open === true ? "1" : "0")};
  height: ${(props) => (props.open === true ? "100%" : "0%")};
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const Close = styled.button`
  height: 10%;
  line-height: 5em;
`;

const Options = styled(NavLink)`
  height: 10%;
  line-height: 5em;
  color: black;
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
