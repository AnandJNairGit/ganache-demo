const ethers = require('ethers');

async function getBalance(address) {
  // Get the network object for the görli network
  let network = await ethers.providers.getNetwork("goerli");

  // Create a provider for the görli network
  let provider = new ethers.providers.JsonRpcProvider(network.url);

  console.log("the network ------->", await network._defaultProvider.renetwork());

//   // Get the balance of the specified address
//   let balance = await provider.getBalance(address);

//   // Convert the balance from wei to ether
//   let etherBalance = ethers.utils.formatEther(balance);

//   console.log(`Balance for address ${address} on network ${network.name} is ${etherBalance} ether`);
}

// Example usage:
getBalance("0x742d35Cc6634C0532925a3b844Bc454e4438f44e");
// Logs: Balance for address 0x742d35Cc6634C0532925a3b844Bc454e4438f44e on network goerli is 2.17 ether