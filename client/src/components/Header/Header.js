import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { activateMenu } from "./headerHelpers";

// https://stackoverflow.com/questions/32553158/detect-click-outside-react-component close menu on click outside
// or MUI https://mui.com/material-ui/react-menu/

import styled from "styled-components";

import { HiMenuAlt2 } from "react-icons/hi";
import { RiShoppingBasketLine } from "react-icons/ri";
import Dropdown from "./Dropdown";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);
  const pathname = window.location.pathname;

  const activateMenu = () => {
    console.log("hello");
    setMenuOpen(!menuOpen);
  };

  let navigate = useNavigate();
  return (
    <Wrapper>
      <Third>
        <HiMenuAlt2 onClick={activateMenu} />
        {menuOpen ? <Dropdown menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> : null}
      </Third>
      <Third className="nav-center">
        {pathname !== "/" ? <StyledLink to="/">PriceSimple.</StyledLink> : null}
      </Third>
      <Third className="nav-right">
        <StyledLink to="basket">
          <RiShoppingBasketLine />
        </StyledLink>
      </Third>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  display: flex;
  top: 0;
  background-color: green;
  border: 2px solid #4caf50;
  height: 75px;
`;

const Third = styled.div`
  width: 33%;
  line-height: 75px;
  &.nav-center {
    text-align: center;
  }
  &.nav-right {
    text-align: right;
  }
`;

const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
`;

export default Header;
