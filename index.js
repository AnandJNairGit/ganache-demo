const ethers = require("ethers");
const fs = require("fs");

const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545");
const wallet = new ethers.Wallet(
  "efca43d822490822471b9cccee4c162e6a7bb77bb1b026c2333d0b0be976507a",
  provider
);

const deploy = async() => {
  const abi = fs.readFileSync("./Mywallet_sol_Wallet.abi", "utf-8");
  const bin = fs.readFileSync("Mywallet_sol_Wallet.bin", "utf-8");
  const contractFactory = new ethers.ContractFactory(abi, bin, wallet);
  console.log("deploying please wait...");
  const contract = await contractFactory.deploy();
  console.log("---------->", contract);

  const transactionReceipt =await contract.deployTransaction.wait(1);
  console.log("the depoyment transaction is----->", contract.deployTransaction);
  console.log("the receipt is ------->", transactionReceipt);

  const nonce = await wallet.getTransactionCount();
  const tx = {
    nonce: nonce,
    gasPrice: 2000000000,
    gasLimit: 1000000,
    to: null,
    value: 0,
    data: "",
    chainId: 1337,

  };
  

};


deploy();

