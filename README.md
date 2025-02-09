# NFT Marketplace

## Technology Stack & Tools
- **Solidity** – Smart contract development
- **JavaScript (React & Testing)** – Frontend and testing
- **Ethers.js** – Blockchain interaction
- **Hardhat** – Development framework
- **IPFS** – Metadata storage
- **React Router** – Navigation management

---

## Initial Setup Requirements
- Install **Node.js** (Ensure the version is below **16.5.0**)
- Install **Hardhat**
- Create an account on [Infura](https://infura.io/) and generate your **private** and **public** keys.

---

## Setting Up the Project

### 1. Clone or Download the Repository
```sh
$ git clone <repository_url>
$ cd nft_marketplace
```

### 2. Install Dependencies
```sh
$ npm install
```

### 3. Start a Local Development Blockchain
```sh
$ npx hardhat node
```

### 4. Connect Development Blockchain Accounts to MetaMask
- Copy the **private key** of an address from Hardhat.
- Open **MetaMask**, click the **profile icon**, and select **Import Account**.
- Paste the **private key** to import the account.
- To connect MetaMask to Hardhat:
  1. Click the **network dropdown** in MetaMask (top center).
  2. Click **Add Network**.
  3. Fill in the following details:
     - **Network Name**: Hardhat
     - **New RPC URL**: http://127.0.0.1:8545
     - **Chain ID**: 31337
  4. Click **Save**.

### 5. Deploy Smart Contracts
```sh
$ npx hardhat run src/backend/scripts/deploy.js --network localhost
```

### 6. Run Tests
```sh
$ npx hardhat test
```

### 7. Launch Frontend
```sh
$ npm run start
```

---

## License
This project is licensed under the **MIT License**.
