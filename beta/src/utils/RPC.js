import { ethers } from "ethers";

function RPC() {
  this.activeAccount = null;
  this.ethereum = null;
  this.provider = null;
  this.signer = null;

  this.handleChainSwitches = async () => {
    try {
      /**
       * @dev check if avalanche
       * if not then alert
       * else ignore
       */
      await this.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0xA869" }],
      });
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await this.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0xA869",
                chainName: "Avalanche Fuji Testnet",
                rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
              },
            ],
          });
        } catch (addError) {
          // handle "add" error
          console.error(addError);
        }
      }
    }
  };
}

const rpcAPI = new RPC();

window?.ethereum.on("accountsChanged", (accounts) => {
  rpcAPI.activeAccount = accounts[0];
  const tempProvider = new ethers.providers.Web3Provider(rpcAPI.ethereum);
  rpcAPI.provider = tempProvider;
  rpcAPI.signer = tempProvider.getSigner();;
});

export default rpcAPI;
