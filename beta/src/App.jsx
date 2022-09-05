import React from "react";
import { BrowserRouter } from "react-router-dom";
import Helpbar from "./components/Helpbar";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import RPCDataLayer from "./contexts/RPCDataLayer";
import PageRoutes from "./utils/Routers";

const { ethereum } = window;

export default function App() {
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

  const handleLogin = async () => {
    try {
      const isUserAuthenticated = localStorage.getItem(
        "isRPCUserAuthenticated"
      );
      if (isUserAuthenticated) {
        const rpcData = localStorage.getItem("rpcUserData");
        const parsedData = JSON.parse(rpcData);
        setRPCData(parsedData);
      } else {
        if (typeof ethereum !== "undefined") {
          console.log("MetaMask is installed!");

          const userAddress = await ethereum.request({
            method: "eth_requestAccounts",
          });

          if (ethereum.isMetaMask)
            console.log("Other EVM Compatible Wallets not detected!");
          else console.log("Other EVM Compatible wallets maybe installed!");

          // const tempProvider = new ethers.providers.Web3Provider(ethereum);
          // const signer = tempProvider.getSigner();

          const tempRpcData = {
            rpcAccountAddress: userAddress[0],
            // rpcProvider: tempProvider,
            // rpcSigner: signer,
            isWalletSet: true,
          };

          console.log(tempRpcData);

          localStorage.setItem("rpcUserData", JSON.stringify(tempRpcData));
          localStorage.setItem("isRPCUserAuthenticated", true);

          setRPCData(tempRpcData);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isRPCUserAuthenticated");
    localStorage.removeItem("rpcUserData");

    setRPCData({
      rpcAccountAddress: "",
      isWalletSet: false,
    });
  };
  return (
    <RPCDataLayer>
      <BrowserRouter>
        <div className="fixedBars__container">
          <Topbar />
          <Navbar rpcAPI={{ rpcData, handleLogin, handleLogout }} />
          <Helpbar />
        </div>
        <PageRoutes />
      </BrowserRouter>
    </RPCDataLayer>
  );
}
