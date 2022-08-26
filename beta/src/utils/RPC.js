const { ethereum } = window;
var activeAccount = "";

const connectWalletRPC = async () => {
  try {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    activeAccount = accounts[0];

    // ethereum.on("accountsChanged", function (accounts) {
    //   activeAccount = accounts[0];
    //   console.log(activeAccount);
    // });

    /**
     * @dev check if avalanche
     * if not then alert
     * else ignore
     */
    // ethereum.on('chainChanged', (chainId) => {
    //   /* handle the chainId */
    // });
  } catch (error) {
    console.error(error);
  }
};

const initRPC = async () => {
  try {
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0xA869" }],
    });

    connectWalletRPC()
  } catch (switchError) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
      try {
        await ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0xA869",
              chainName: "Avalanche Fuji Testnet",
              rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
            },
          ],
        });

        connectWalletRPC()
      } catch (addError) {
        // handle "add" error
      }
    }
    // handle other "switch" errors
  }
};

if (typeof ethereum !== "undefined") console.log("MetaMask is installed!");

if (ethereum.isMetaMask)
  console.log("Other EVM Compatible Wallets not detected!");
else console.log("Other EVM Compatible wallets maybe installed!");

initRPC();
