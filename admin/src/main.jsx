import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import history from "./utils/history";
import { getConfig } from "./config";
import { Auth0Provider } from "@auth0/auth0-react";

const config = getConfig();

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: window.location.origin,
  onRedirectCallback,
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider {...providerConfig}>
    <App />
    </Auth0Provider>
)
