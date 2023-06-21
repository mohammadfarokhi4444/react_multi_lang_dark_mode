import React from "react";
import { createRoot } from "react-dom/client";
import { UserProvider } from "./context/UserContext";
import { LayoutProvider } from "./context/LayoutContext";
import App from "./App";
import "./index.css";
import "./i18n";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <LayoutProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </LayoutProvider>
);
