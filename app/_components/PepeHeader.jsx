"use client";
import Timer from "./Timer";

function PepeHeader() {
  return (
    <article>
      <div className="w-full h-16 bg-neutral-800 rounded-lg mb-3 flex justify-center items-center">
        <h2 className="text-4xl font-bold text-[#e1a313]">Buy Pepe Coin</h2>
      </div>
      <Timer />
    </article>
  );
}

export default PepeHeader;
