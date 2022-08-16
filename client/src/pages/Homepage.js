import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import photo from "../assets/pexels-olena-bohovyk-3323687.jpeg";
import { FadeIn } from "../helpers/FadeIn";

const Homepage = () => {
  let navigate = useNavigate();

  const onClickFunc = (ev) => {
    ev.preventDefault();
    navigate("/search");
  };
  return (
    <Background>
      <FadeIn>
        <Main>
          <Title>PriceSimple</Title>
          <Text>Find the best prices on produce at your local grocery store</Text>
          <Button onClick={onClickFunc}>Search produce</Button>
        </Main>
      </FadeIn>
    </Background>
  );
};

export default Homepage;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url(${photo});
  background-size: cover;
  color: var(--color-header);
  @media only screen and (min-width: 800px) {
    background-position: 30% 20%;
  }
`;

const Main = styled.div`
  position: relative;
  top: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3.5em;
  align-self: center;
  font-weight: 600;
  font-family: var(--font-text);
`;

const Text = styled.p`
  width: 70%;
  line-height: 2em;
  position: relative;
  font-weight: 600;
  margin-left: 0.5em;
  text-align: center;
  color: black;
`;

const Button = styled.button`
  position: absolute;
  border: 1px solid black;
  border-radius: 8px;
  /* margin-top: 2em; */
  top: 75vh;
  padding: 0.4em 1em;
  background: var(--color-button);
  align-self: center;
`;