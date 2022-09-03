import { ethers } from "ethers";

function RPC() {
  this.activeAccount = null;
  this.ethereum = null;
  this.provider = null;
  this.signer = null;
  /**
  @dev This is checking if the user has metamask installed 
  and if it is the only wallet installed. 
  */
  this.rpcChecks = () => {
    const { ethereum } = window;
    let status;
    if (typeof ethereum !== "undefined") {
      console.log("MetaMask is installed!");
      status = true;
    }
    if (ethereum.isMetaMask)
      console.log("Other EVM Compatible Wallets not detected!");
    else {
      console.log("Other EVM Compatible wallets maybe installed!");
      status = false;
    }

    if (status) this.ethereum = ethereum;
    return status;
  };

  this.authenticate = async () => {
    try {
      const accounts = await this.ethereum.request({
        method: "eth_requestAccounts",
      });
      this.activeAccount = accounts[0];
      const tempProvider = new ethers.providers.Web3Provider(this.ethereum);
      this.provider = tempProvider;
      this.signer = tempProvider.getSigner();
    } catch (error) {
      console.error(error);
    }
  };
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
