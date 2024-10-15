"use client";

import { useAccount, useChains, useSwitchChain } from "wagmi";

export const UseData = () => {
  const data = useAccount();
  // console.log(data);

  return data;
};

export function shortenAddress(address) {
  if (!address) return "";
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
}
export const UseChainData = () => {
  const chains = useChains();
  return chains;
};

export const UseSwitchNetwork = () => {
  const { switchChain } = useSwitchChain();
  return switchChain;
};
