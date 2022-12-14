import styled from "styled-components";

import SearchBar from "../components/SearchBar";
import bowl from "../assets/edited_bowl.png";
import { FadeIn } from "../helpers/FadeIn";

const SearchPage = () => {
  return (
    <Background>
      <Title>{"This week's prices".toUpperCase()}</Title>
      <SearchBar />
      <FadeIn duration={2000}>
        <Image src={bowl} />
      </FadeIn>
    </Background>
  );
};

export default SearchPage;

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  /* background: rgb(255, 255, 255); */
  /* background: linear-gradient(0deg, rgba(175, 110, 77, 1) 0%, rgba(237, 240, 211, 1) 89%); */
  background: linear-gradient(0deg, rgba(237, 240, 211, 1) 0%, rgba(175, 110, 77, 1) 89%);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const Title = styled.h2`
  margin: 2em 0 1em 0;
  font-weight: 100;
  font-size: 2em;
  align-self: center;
  /* letter-spacing: 2px; */
  font-family: var(--font-text);
  /* color: #85754e; */
`;

const Image = styled.img`
  position: fixed;
  top: 80%;
  width: 100%;
  z-index: -1;
  @media only screen and (min-width: 800px) {
    width: 50%;
    top: 30%;
    left: 70%;
  }
`;
