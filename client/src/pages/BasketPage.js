import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { UserContext } from "../context/UserContext";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserCart } from "../helpers/getUserCart";

import LoginModal from "../components/LoginModal";
import SearchResultSmall from "../components/SearchResultSmall";

const BasketPage = () => {
  const { user, isAuthenticated } = useAuth0();
  const {
    state,
    actions: { updateUserCart },
  } = useContext(UserContext);
  const userCart = state.userCart;
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

  if (userCart) {
    return (
      <Wrapper>
        <Title>YOUR BASKET</Title>
        <h2>IGA</h2>
        <div>
          {userCart
            .filter((item) => {
              return item.store === "iga";
            })
            .map((item) => {
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
            })}
        </div>
        <h2>METRO</h2>
        {userCart
          .filter((item) => {
            return item.store === "metro";
          })
          .map((item) => {
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
          })}
        <div></div>
        <button onClick={() => navigate("/results")}>Back to results</button>
      </Wrapper>
    );
  } else {
    return visible ? (
      <LoginModal visible={visible} setVisible={setVisible} />
    ) : (
      <EmptyMsg>
        Your basket is <em>empty</em>
      </EmptyMsg>
    );
  }
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  align-self: center;
`;

const EmptyMsg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 15em;
`;

export default BasketPage;
