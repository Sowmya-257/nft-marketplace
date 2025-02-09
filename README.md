# NFT Marketplace

## Technology Stack & Tools
git init Solidity  // Smart contract development  
git init JavaScript (React & Testing)  // Frontend and testing  
git init Ethers.js  // Blockchain interaction  
git init Hardhat  // Development framework  
git init IPFS  // Metadata storage  
git init React Router  // Navigation management  

---

## Initial Setup Requirements
git install Node.js  # Ensure version < 16.5.0  
git install Hardhat  
git commit -m "Create Infura account and generate API keys"  

---

## Setting Up the Project  

git clone <repository_url>  
cd nft_marketplace  

git install dependencies  
npm install  

git commit -m "Set up Infura account"  
> Sign up at [Infura](https://infura.io/)  
> Create a new project (Ethereum)  
> Copy Project ID & Project Secret  
> Store keys securely  

git commit -m "Start local development blockchain"  
npx hardhat node  

git commit -m "Connect Development Blockchain Accounts to MetaMask"  
> Copy private key from Hardhat  
> Open MetaMask → Profile Icon → Import Account  
> Paste private key  
> Connect MetaMask to Hardhat:  
>> Click network dropdown → Add Network  
>> Network Name: `Hardhat`  
>> New RPC URL: `http://127.0.0.1:8545`  
>> Chain ID: `31337`  
>> Click Save  

git commit -m "Deploy smart contracts"  
npx hardhat run src/backend/scripts/deploy.js --network localhost  

git commit -m "Run tests"  
npx hardhat test  

git commit -m "Launch frontend"  
npm run start  

---

## License  
git commit -m "License under MIT"  
