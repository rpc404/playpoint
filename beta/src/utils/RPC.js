const { ethereum } = window;

export const handleRPCLogin = async (dispatch) => {
  try {
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

      localStorage.setItem("rpcUserData", JSON.stringify(tempRpcData));
      localStorage.setItem("isRPCUserAuthenticated", true);

      dispatch(tempRpcData);
    }
  } catch (error) {
    console.error(error);
  }
};

export const handleRPCLogout = (dispatch) => {
  localStorage.removeItem("isRPCUserAuthenticated");
  localStorage.removeItem("rpcUserData");

  dispatch({
    rpcAccountAddress: "",
    isWalletSet: false,
  });
};
