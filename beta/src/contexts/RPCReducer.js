import { ethers } from "ethers";

export const initialState = {
  rpcAccount: null,
  rpcProvider: null,
  rpcSigner: null,
};

const RPCReducer = (state, action) => {
  switch (action.type) {
    case "WALLET_LOGIN":
      const { ethereum } = window;

      if (typeof ethereum !== "undefined")
        {console.log("MetaMask is installed!");}
        
        if (ethereum.isMetaMask)
        console.log("Other EVM Compatible Wallets not detected!");
        else console.log("Other EVM Compatible wallets maybe installed!");

      if (typeof ethereum !== "undefined")
        ethereum
          .request({
            method: "eth_requestAccounts",
          })
          .then((accounts) => {
            const tempProvider = new ethers.providers.Web3Provider(ethereum);

            return {
              rpcAccount: accounts[0],
              rpcProvider: tempProvider,
              rpcSigner: tempProvider.getSigner(),
            };
          }).then(() => {
            console.log(state)
          })
          .catch((err) => console.error(err));
    default:
      return state;
  }
};

export default RPCReducer;
