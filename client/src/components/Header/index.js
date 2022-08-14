import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import styled from "styled-components";

import { HiMenuAlt2 } from "react-icons/hi";
import { RiShoppingBasketLine } from "react-icons/ri";
import { BsPersonCircle } from "react-icons/bs";
import Dropdown from "./Dropdown";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { user, isAuthenticated } = useAuth0();
  console.log(isAuthenticated);

  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const activateMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Wrapper className={window.location.pathname === "/" ? "home" : "other"}>
      <Third>
        <HiMenuAlt2 onClick={activateMenu} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </Third>
      <Third className="nav-center">
        {window.location.pathname === "/" ? null : (
          <Title
            onClick={() => {
              navigate("/");
            }}
          >
            PriceSimple.
          </Title>
        )}
      </Third>
      <Third className="nav-right">
        <StyledLink to="basket">
          <RiShoppingBasketLine />
        </StyledLink>
        {isAuthenticated ? (
          <StyledLink to={`profile/${user.sub}`}>
            <BsPersonCircle />
          </StyledLink>
        ) : null}
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </Third>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  display: flex;
  top: 0;
  background: ${(props) => (props.className === "home" ? "transparent" : "#edf0d3")};
  height: 5em;
  z-index: 2;
`;

const Third = styled.div`
  width: 33%;
  display: flex;
  align-items: center;
  &.nav-center {
    justify-content: center;
  }
  &.nav-right {
    display: flex;
    align-items: center;
    justify-content: end;
  }
`;

const Title = styled.button`
  color: black;
  font-size: 1.5em;
  font-weight: 800;
`;

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 1.25em;
`;

const Menu = styled(Dropdown)`
  /* opacity: ${(props) => (props.menuOpen === true ? "1" : "0")};
  height: ${(props) => (props.menuOpen === true ? "100%" : "0%")};
  transition: all 2s ease; */
`;

export default Header;
