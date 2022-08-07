import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Dropdown = ({ menuOpen, setMenuOpen }) => {
  const clickHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Menu>
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
  display: flex;
  flex-direction: column;
  height: 200px;
  background: black;
  color: white;
`;

const Options = styled(NavLink)`
  height: 20%;
`;

export default Dropdown;
