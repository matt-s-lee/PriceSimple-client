import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserContextProvider } from "./context/UserContext";
import { ProductContextProvider } from "./context/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-nxl20e0k.us.auth0.com"
    clientId="k5hQGx7OClOF2sSsfqS3mTWQ0wJc72mC"
    redirectUri={window.location.origin}
  >
    <ProductContextProvider>
      <UserContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </UserContextProvider>
    </ProductContextProvider>
  </Auth0Provider>
);
