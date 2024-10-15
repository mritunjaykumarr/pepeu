"use client";

import {
  UseChainData,
  UseData,
  UseSwitchNetwork,
} from "@/app/_utlis/wagmiData";
import { useState, useEffect } from "react";

function Select() {
  const data = UseData(); // Fetch user chain data
  const chain = UseChainData(); // Fetch all available chains
  const switchChain = UseSwitchNetwork(); // Function to switch networks

  const [activeChain, setActiveChain] = useState(null); // Initial active chain

  // Set the initial active chain when component mounts
  useEffect(() => {
    if (data.chainId) {
      setActiveChain(data.chainId); // Initialize with the current active chain
    }
  }, [data.chainId]);

  // Handle chain change
  const handleChange = (e) => {
    const selectedValue = Number(e.target.value);
    setActiveChain(selectedValue); // Update active chain state
    switchChain({ chainId: selectedValue }); // Switch the network
  };

  return (
    <div className="mx-auto">
      <select
        className="bg-[#333] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-white"
        value={activeChain || ""} // Set activeChain as the selected value
        onChange={handleChange} // Trigger chain switch on change
      >
        <option value="">Choose Wallet</option>
        {chain?.length > 0 ? (
          chain.map((data) => (
            <option value={data.id} key={data.id}>
              {data.name}
            </option>
          ))
        ) : (
          <option disabled>No Wallets Available</option>
        )}
      </select>
    </div>
  );
}

export default Select;
