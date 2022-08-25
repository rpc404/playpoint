import React from "react";
import ReactDOM from "react-dom/client";
import { MoralisProvider } from "react-moralis";
import App from "./App";
import { envData } from "./utils/envData";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MoralisProvider
      appId={envData.moralisAppId}
      serverUrl={envData.moralisServerUrl}
    >
      <App />
    </MoralisProvider>
  </React.StrictMode>
);
