NFT Marketplace
Technology Stack & Tools
Solidity – Smart contract development
JavaScript (React & Testing) – Frontend and testing
Ethers.js – Blockchain interaction
Hardhat – Development framework
IPFS – Metadata storage
React Router – Navigation management
Initial Setup Requirements
Install Node.js (Ensure the version is below 16.5.0)
Install Hardhat
Create an account on Infura and generate API keys (Project ID & Project Secret)
Setting Up the Project
1. Clone or Download the Repository
sh
Copy
Edit
$ git clone <repository_url>
$ cd nft_marketplace
2. Install Dependencies
sh
Copy
Edit
$ npm install
3. Create an Infura Account & Obtain API Keys
Sign up at Infura.
Create a new project (choose Ethereum).
Copy the Project ID and Project Secret.
Store these securely as they will be required for blockchain interaction.
4. Start a Local Development Blockchain
sh
Copy
Edit
$ npx hardhat node
5. Connect Development Blockchain Accounts to MetaMask
Copy the private key of an address from Hardhat.
Open MetaMask, click the profile icon, and select Import Account.
Paste the private key to import the account.
To connect MetaMask to Hardhat:
Click the network dropdown in MetaMask (top center).
Click Add Network.
Fill in the following details:
Network Name: Hardhat
New RPC URL: http://127.0.0.1:8545
Chain ID: 31337
Click Save.
6. Deploy Smart Contracts
sh
Copy
Edit
$ npx hardhat run src/backend/scripts/deploy.js --network localhost
7. Run Tests
sh
Copy
Edit
$ npx hardhat test
8. Launch Frontend
sh
Copy
Edit
$ npm run start
License
This project is licensed under the MIT License.
