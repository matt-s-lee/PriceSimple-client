import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

import Homepage from "./pages/Homepage";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";
import BasketPage from "./pages/BasketPage";
import ResultPage from "./pages/ResultPage";

import Layout from "./components/Layout";

const LayoutWrapper = ({ Component }) => {
  return (
    <LayoutWrap>
      <Component />
    </LayoutWrap>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<LayoutWrapper Component={<SearchPage />} />} />
        <Route path="/results" element={<LayoutWrapper Component={<ResultPage />} />} />
        <Route path="/basket" element={<LayoutWrapper Component={<BasketPage />} />} />
        {/* should this be dynamic? */}
        <Route path="/profile/:userId" element={<LayoutWrapper Component={<ProfilePage />} />} />
        <Route path="">404</Route>
      </Routes>
    </BrowserRouter>
  );
};

const LayoutWrap = styled(Layout)`
  display: flex;
  position: absolute;
`;

export default App;
