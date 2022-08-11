import { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import GlobalStyles from "./GlobalStyles";

import Homepage from "./pages/Homepage";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";
import BasketPage from "./pages/BasketPage";
import ResultPage from "./pages/ResultPage";
import Header from "./components/Header/Header";
import { ProductContext } from "./context/ProductContext";
import { UserContext } from "./context/UserContext";

const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const {
    state,
    actions: { receiveUserData },
  } = useContext(UserContext);
  const {
    actions: { receiveProductData },
  } = useContext(ProductContext);

  const fetchUsers = async () => {
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
    const fetchedUsers = await response.json();
    // setUsers(fetchedUsers.data);
    console.log(fetchedUsers);
  };

  useEffect(() => {
    fetch("http://localhost:8000/all-products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        receiveProductData(json.data);
      });
  }, []);
  // comment
  useEffect(() => {
    // receiveUserData(user, isAuthenticated, isLoading);
    if (isAuthenticated) {
      fetchUsers();
    }
  }, [isAuthenticated]);

  // useEffect(() => {
  //   receiveUserData(user, isAuthenticated, isLoading);
  //   if (isAuthenticated) {
  //     console.log("hello");
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
  //       });
  //   }
  // }, [isAuthenticated, user]);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/search" element={<SearchPage />} />
        <Route exact path="/results" element={<ResultPage />} />
        <Route exact path="/basket" element={<BasketPage />} />
        <Route exact path="/profile/" element={<ProfilePage />} />
        {/* <Route exact path="/profile/:userId" element={<ProfilePage />} /> */}
        <Route exact path="">
          404
        </Route>
      </Routes>
    </BrowserRouter>
  );
};;;;;

export default App;

// const LayoutWrapper = ({ Component }) => {
//   return (
//     <Header>
//       <Component />
//     </Header>
//   );
// };
//         {/* <Route exact path="/search" element={<LayoutWrapper Component={SearchPage} />} /> */}
