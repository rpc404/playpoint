import React from "react";
import RPCReducer, { initialState } from "./RPCReducer";

export const RPCDataLayerContext = React.createContext();

export default function RPCDataLayer({ children }) {
  const [dataLayer, dispatch] = React.useReducer(RPCReducer, initialState);

  return (
    <RPCDataLayerContext.Provider value={[dataLayer, dispatch]}>
      {children}
    </RPCDataLayerContext.Provider>
  );
}

export const useRPCDataLayerValue = () =>
  React.useContext(RPCDataLayerContext);
