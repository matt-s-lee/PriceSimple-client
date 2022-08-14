import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import photo from "../images/pexels-olena-bohovyk-3323687.jpeg";

const Homepage = () => {
  let navigate = useNavigate();

  const onClickFunc = (ev) => {
    ev.preventDefault();
    navigate("/search");
  };
  return (
    <Background>
      <Main>
        <Title>PriceSimple</Title>
        <Text>Find the best prices on produce at your local grocery store</Text>
        <Button onClick={onClickFunc}>Search by Item</Button>
      </Main>
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
  /* background: rgb(108, 186, 187);
  background: linear-gradient(326deg, rgba(108, 186, 187, 1) 0%, rgba(129, 57, 237, 1) 100%); */
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
  /* text-shadow: 1px 1px 4px var(); */
  /* margin-bottom: 1em; */
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
  border: 1px solid black;
  border-radius: 8px;
  margin-top: 25em;
  padding: 0.4em 1em;
  background: var(--color-button);
  align-self: center;
`;

// const { user, isAuthenticated, isLoading } = useAuth0();
// const userData = { user, isAuthenticated, isLoading };
// const {
//   state,
//   actions: { receiveUserData },
// } = useContext(UserContext);

// const [profileCreated, setProfileCreated] = useState(false);

// useEffect(() => {
//   receiveUserData(user, isAuthenticated, isLoading);
//   if (user) {
//     fetch(`/profile/${user.sub}`, {
//       method: "POST",
//       body: JSON.stringify({
//         _id: user.sub,
//         email: user.email,
//         name: user.name,
//         picture: user.picture,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("message", data.message);
//         setProfileCreated(true);
//       });
//   }
// }, [isAuthenticated]);
// eslint-disable-next-line
