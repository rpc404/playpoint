const { ethereum } = window;
const activeAccount = "";

if (typeof ethereum !== "undefined") console.log("MetaMask is installed!");

if (ethereum.isMetaMask)
  console.log("Other EVM Compatible Wallets not detected!");
else console.log("Other EVM Compatible wallets maybe installed!");

ethereum
  .request({ method: "eth_requestAccounts" })
  .then((data) => console.log(data[0]))
  .catch((err) => console.log(err));
