import { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import GlobalStyles from "./GlobalStyles";

import Homepage from "./pages/Homepage";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";
import BasketPage from "./pages/BasketPage";
import ResultPage from "./pages/ResultPage";
import ComparePage from "./pages/ComparePage";
import Header from "./components/Header";
import { ProductContext } from "./context/ProductContext";
import { UserContext } from "./context/UserContext";
import { getUserCart } from "./helpers/getUserCart";

const App = () => {
  const { user, isAuthenticated } = useAuth0();
  const {
    actions: { updateUserCart },
  } = useContext(UserContext);
  const {
    actions: { receiveProductData },
  } = useContext(ProductContext);

  const createUser = async () => {
    const response = await fetch(`http://localhost:8000/profile/${user.sub}`, {
      method: "POST",
      body: JSON.stringify({
        _id: user.sub,
        email: user.email,
        name: user.name,
        picture: user.picture,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const fetchedUser = await response.json();
  };

  useEffect(
    () => {
      if (isAuthenticated) {
        createUser();
        getUserCart(user.sub, updateUserCart);
      }
    }, // eslint-disable-next-line
    [isAuthenticated]
  );

  useEffect(
    () => {
      fetch("http://localhost:8000/all-products")
        .then((res) => res.json())
        .then((json) => {
          receiveProductData(json.data);
        });
    }, // eslint-disable-next-line
    []
  );

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/search" element={<SearchPage />} />
        <Route exact path="/results" element={<ResultPage />} />
        <Route exact path="/basket" element={<BasketPage />} />
        <Route exact path="/profile" element={<ProfilePage />} />
        <Route exact path="/compare" element={<ComparePage />} />
        <Route exact path="">
          404
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;