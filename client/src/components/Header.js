import styled from "styled-components";

import { HiMenuAlt2 } from "react-icons/hi";
import { RiShoppingBasketLine } from "react-icons/ri";

const Header = () => {
  return (
    <Wrapper>
      <Third>
        <HiMenuAlt2 />
      </Third>
      <Third style={{ textAlign: "center" }}>
        <span>PriceSimple.</span>
      </Third>
      <Third style={{ textAlign: "right" }}>
        <RiShoppingBasketLine />
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
`;

export default Header;
