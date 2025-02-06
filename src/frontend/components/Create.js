import { useState } from 'react';
import { ethers } from "ethers";
import { Row, Form, Button } from 'react-bootstrap';
import { create as ipfsHttpClient } from 'ipfs-http-client';
import { Buffer } from 'buffer';

// Replace these with your actual Project ID and Project Secret securely
const projectId = 'Your_Project_ID';
const projectSecret = 'Your_Project_Secret';

// Initialize IPFS client
const client = ipfsHttpClient({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: `Basic ${Buffer.from(projectId + ':' + projectSecret).toString('base64')}`,
  },
});

const Create = ({ marketplace, nft }) => {
  const [image, setImage] = useState('');
  const [price, setPrice] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  // Upload image to IPFS
  const uploadToIPFS = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];

    if (typeof file !== 'undefined') {
      try {
        const result = await client.add(file);
        console.log(result);
        setImage(`https://ipfs.infura.io/ipfs/${result.path}`);
      } catch (error) {
        console.error("IPFS image upload error: ", error);
      }
    }
  };

  // Create NFT and upload metadata to IPFS
  const createNFT = async () => {
    if (!image || !price || !name || !description) return;

    try {
      const metadata = JSON.stringify({ image, price, name, description });
      const result = await client.add(metadata);
      mintThenList(result);
    } catch (error) {
      console.error("IPFS URI upload error: ", error);
    }
  };

  // Mint NFT and list it on marketplace
  const mintThenList = async (result) => {
    const uri = `https://ipfs.infura.io/ipfs/${result.path}`;
    
    // Mint NFT
    await (await nft.mint(uri)).wait();

    // Get the tokenId of the newly minted NFT
    const id = await nft.tokenCount();

    // Approve marketplace to transfer NFT
    await (await nft.setApprovalForAll(marketplace.address, true)).wait();

    // Add NFT to marketplace with listing price
    const listingPrice = ethers.utils.parseEther(price.toString());
    await (await marketplace.makeItem(nft.address, id, listingPrice)).wait();
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <main role="main" className="col-lg-12 mx-auto" style={{ maxWidth: '1000px' }}>
          <div className="content mx-auto">
            <Row className="g-4">
              <Form.Control
                type="file"
                required
                name="file"
                onChange={uploadToIPFS}
              />
              <Form.Control
                onChange={(e) => setName(e.target.value)}
                size="lg"
                required
                type="text"
                placeholder="Name"
              />
              <Form.Control
                onChange={(e) => setDescription(e.target.value)}
                size="lg"
                required
                as="textarea"
                placeholder="Description"
              />
              <Form.Control
                onChange={(e) => setPrice(e.target.value)}
                size="lg"
                required
                type="number"
                placeholder="Price in ETH"
              />
              <div className="d-grid px-0">
                <Button onClick={createNFT} variant="primary" size="lg">
                  Create & List NFT!
                </Button>
              </div>
            </Row>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Create;
