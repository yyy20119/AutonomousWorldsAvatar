import React, { ChangeEvent, useEffect } from 'react';
import { Web3Storage } from 'web3.storage';
import { useMUD } from "./MUDContext";

const API_TOKEN = ''
const AvatarUploader = () => {
  const {
    systemCalls: { update },
    network: { storeCache },
  } = useMUD();

  const client = new Web3Storage({ token: API_TOKEN });

  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;
    const files = Array.from(fileInput.files as FileList);
    const rootCid = await client.put(files);
    const info = await client.status(rootCid);
    const res = await client.get(rootCid);

    if (res !== null) {
      const filesFromResponse = await res.files();

      for (const file of filesFromResponse) {
        console.log(`${file.cid} ${file.name} ${file.size}`);
        const ipfsUrl = `https://ipfs.io/ipfs/${file.cid}`;
        await update(ipfsUrl);
        console.log(ipfsUrl);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
};

export default AvatarUploader;
