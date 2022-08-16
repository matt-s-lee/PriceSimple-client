import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { UserContext } from "../context/UserContext";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserCart } from "../helpers/getUserCart";

import LoginModal from "../components/LoginModal";
import SearchResultSmall from "../components/SearchResultSmall";
import SearchButton from "../components/SearchButton";
import { Divider } from "@mui/material";

const BasketPage = () => {
  const { user, isAuthenticated } = useAuth0();
  const {
    state,
    actions: { updateUserCart },
  } = useContext(UserContext);
  const userCart = state.userCart;
  console.log(userCart);
  const [visible, setVisible] = useState(true);
  const [remove] = useState(true);
  const navigate = useNavigate();

  useEffect(
    () => {
      if (isAuthenticated) {
        getUserCart(user.sub, updateUserCart);
      }
    }, // eslint-disable-next-line
    []
  );

  const filterByStore = (store) => {
    const filteredItems = userCart.filter((item) => {
      return item.store === store;
    });
    if (filteredItems.length > 0) {
      return filteredItems.map((item) => {
        return (
          <SearchResultSmall
            remove={remove}
            key={item.productId}
            id={item.productId}
            quantity={item.quantity}
            product={item.product}
            soldByPackage={item.soldByPackage}
            soldByWeight={item.soldByWeight}
            soldIndividually={item.soldIndividually}
            store={item.store}
            imgSrc={item.imgSrc}
            link={item.link}
          />
        );
      });
    } else {
      return <EmptyStoreMsg>Empty basket</EmptyStoreMsg>;
    }
  };

  if (userCart) {
    return (
      <Wrapper>
        <Title>YOUR BASKET</Title>
        <Divider />
        <H2>IGA</H2>
        <Basket>{filterByStore("iga")}</Basket>
        <H2>METRO</H2>
        <Basket>{filterByStore("metro")}</Basket>
        <Divider />
        <Button onClick={() => navigate("/results")}>Back to results</Button>
        <SearchButton />
      </Wrapper>
    );
  } else {
    return visible ? (
      <LoginModal visible={visible} setVisible={setVisible} />
    ) : (
      <>
        <EmptyMsg>
          Your basket is <em>empty</em>
        </EmptyMsg>
        <SearchButton />
      </>
    );
  }
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  align-self: center;
  margin: 1em 0 0.5em 0;
`;

const H2 = styled.h2`
  margin: 1em 0 0 0.5em;
`;

const Basket = styled.div`
  margin-bottom: 2em;

  @media only screen and (min-width: 800px) {
    display: flex;
    justify-content: baseline;
  }
`;

const EmptyMsg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 15em;
`;

const EmptyStoreMsg = styled(EmptyMsg)`
  height: 2em;
`;

const Button = styled.button`
  font-family: var(--font-titles);
  margin-top: 1em;
`;

export default BasketPage;
