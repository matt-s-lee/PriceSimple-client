import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";

import Homepage from "./pages/Homepage";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";
import BasketPage from "./pages/BasketPage";
import ResultPage from "./pages/ResultPage";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/results" element={<ResultPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
        <Route path="">404</Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
