import styled from "styled-components";

import Divider from "../components/Divider";
import SearchBar from "../components/SearchBar";
import bowl from "../assets/edited_bowl.png";

const SearchPage = () => {
  return (
    <Background>
      <Title>{"What's on your list?".toUpperCase()}</Title>
      {/* <Divider /> */}
      <SearchBar />
      <Image />
      <Image src={bowl} />
    </Background>
  );
};

export default SearchPage;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgb(108, 186, 187);
  background: linear-gradient(326deg, rgba(108, 186, 187, 1) 0%, rgba(129, 57, 237, 1) 100%);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const Title = styled.h2`
  margin: 2em 0 1em 0;
  font-weight: 100;
  font-size: 30px;
  align-self: center;
  /* letter-spacing: 2px; */
`;

const Image = styled.img`
  position: fixed;
  top: 80%;
  width: 100%;
  z-index: -1;
`;
