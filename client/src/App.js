import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";

import Homepage from "./pages/Homepage";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";
import BasketPage from "./pages/BasketPage";
import ResultPage from "./pages/ResultPage";
import Header from "./components/Header/Header";

// const LayoutWrapper = ({ Component }) => {
//   return (
//     <Header>
//       <Component />
//     </Header>
//   );
// };
//         {/* <Route exact path="/search" element={<LayoutWrapper Component={SearchPage} />} /> */}

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/search" element={<SearchPage />} />
        <Route exact path="/results" element={<ResultPage />} />
        <Route exact path="/basket" element={<BasketPage />} />
        <Route exact path="/profile/:userId" element={<ProfilePage />} />
        <Route exact path="">
          404
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
