const fs = require("fs");

async function main() {
  const [deployer] = await ethers.getSigners();
  
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  // ✅ Deploy the NFT contract
  const NFT = await ethers.getContractFactory("NFT");
  const Marketplace = await ethers.getContractFactory("Marketplace");
  // deploy contracts
  const marketplace = await Marketplace.deploy(1);
  const nft = await NFT.deploy();
  // Save copies of each contracts abi and address to the frontend.
  console.log("Marketplace address", marketplace.address);
  
  saveFrontendFiles(nft , "NFT");
  saveFrontendFiles(marketplace , "Marketplace");
}

function saveFrontendFiles(contract, name) {
  const contractsDir = __dirname + "/../../frontend/contractsData";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir, { recursive: true }); // ✅ Create directory if missing
  }

  fs.writeFileSync(
    `${contractsDir}/${name}-address.json`,
    JSON.stringify({ address: contract.address }, null, 2)
  );

  const contractArtifact = artifacts.readArtifactSync(name);

  fs.writeFileSync(
    `${contractsDir}/${name}.json`,
    JSON.stringify(contractArtifact, null, 2)
  );
}

// ✅ Run the deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
