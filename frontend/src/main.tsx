import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MetaMaskProvider } from "metamask-react";
import { AuthContextProvider } from "./context/AuthContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MetaMaskProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </MetaMaskProvider>
    </BrowserRouter>
  </React.StrictMode>
);
