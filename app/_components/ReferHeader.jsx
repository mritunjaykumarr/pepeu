"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Button from "./Button";

function ReferHeader({ totalBalance }) {
 

  return (
    <header className="header-el">
      <Button className="metamask-button">
        Total Balance : <strong>{totalBalance || 0}</strong>
      </Button>

      <div id="walletAddress"></div>
      <div className="container-div flex justify-center items-center gap-12">
        <img src="/refers/refer-fluid.jpg" alt="" className="image-fluid" />
        <h1 className="">AIRDROP PEPE LAYER2</h1>
      </div>
    </header>
  );
}

export default ReferHeader;
