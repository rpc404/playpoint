import React from "react";
import { BrowserRouter } from "react-router-dom";
import Helpbar from "./components/Helpbar";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import RPCDataLayer from "./contexts/RPCDataLayer";
import PageRoutes from "./utils/Routers";
import { handleRPCLogin, handleRPCLogout } from "./utils/RPC";

const { ethereum } = window;

export default function App() {
  /**
   * @dev Web3 Authentication Modules
   */
  const [rpcData, setRPCData] = React.useState({
    rpcAccountAddress: "",
    isWalletSet: false,
  });

  React.useEffect(() => {
    const isUserAuthenticated = localStorage.getItem("isRPCUserAuthenticated");

    if (isUserAuthenticated) {
      const rpcData = localStorage.getItem("rpcUserData");
      const parsedData = JSON.parse(rpcData);
      setRPCData(parsedData);
    }
  }, []);

  ethereum.on("accountsChanged", (accounts) => {
    const tempRpcData = {
      rpcAccountAddress: accounts[0],
      isWalletSet: true,
    };

    localStorage.setItem("rpcUserData", JSON.stringify(tempRpcData));
    localStorage.setItem("isRPCUserAuthenticated", true);
    setRPCData(tempRpcData);
  });

  return (
    <RPCDataLayer>
      <BrowserRouter>
        <div className="fixedBars__container">
          <Topbar />
          <Navbar
            rpcAPI={{
              rpcData,
              handleLogin: () => handleRPCLogin(setRPCData),
              handleLogout: () => handleRPCLogout(setRPCData),
            }}
          />
          <Helpbar />
        </div>
        <PageRoutes />
      </BrowserRouter>
    </RPCDataLayer>
  );
}
