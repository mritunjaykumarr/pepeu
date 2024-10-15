"use client";
import { useState, useEffect } from "react";
import {
  useSendTransaction,
  useWaitForTransactionReceipt,
  useAccount,
} from "wagmi"; // Import useAccount
import { parseEther } from "viem";
import toast, { Toaster } from "react-hot-toast";

import Button from "./Button";
import Input from "./Input";
import Select from "./Select";
import { calculatePepeCoinAmount } from "@/app/_utlis/convertEtherToPepe";
// import timerFunction from "./timer";
import MiniSpinner from "./MiniSpinner";

function Exchange() {
  const [inputValue, setInputValue] = useState("");
  const [pepeCoinAmount, setPepeCoinAmount] = useState(null);
  const [loading, setLoading] = useState(false);

  const { sendTransaction, isPending, error: sendError } = useSendTransaction();
  const { isConnected } = useAccount(); // Check if wallet is connected

  // Use the wait for transaction receipt hook
  const { isSuccess: isConfirmed, error: receiptError } =
    useWaitForTransactionReceipt();

  // useEffect(() => {
  //   timerFunction(); // Call the timer function
  // }, []);

  // Handle input change for ETH amount
  function handleInputChange(e) {
    const { value } = e.target;
    setInputValue(value);

    const validNumber = value !== "" && !isNaN(Number(value));
    setPepeCoinAmount(
      validNumber ? calculatePepeCoinAmount(Number(value)) : null
    );
  }

  // Handle sending the transaction
  async function handleSendTransaction() {
    if (!isConnected) {
      toast.error("Please connect your MetaMask wallet."); // Show toast if not connected
      return;
    }

    if (!inputValue) {
      toast.error("Please enter a valid amount.");
      return;
    }

    try {
      setLoading(true); // Start loading
      const transaction = await sendTransaction({
        to: "0xD53f30a45Bb3F338e6a0Cf1ee6E6Fb0303FCAb70",
        value: parseEther(inputValue),
      });

      if (transaction) {
        toast.success("Transaction sent! Waiting for confirmation..."); // Notify user of transaction sent
      }
    } catch (err) {
      if (sendError) {
        toast.error("Transaction failed. Please try again."); // General error
        console.error("Transaction failed:", sendError);
      } else {
        toast.error("Unexpected error occurred."); // Handle unexpected errors
      }
    } finally {
      setLoading(false); // End loading
    }
  }

  // Handle success or receipt errors
  useEffect(() => {
    if (isConfirmed) {
      toast.success("Transaction confirmed!"); // Notify success on confirmation
    }
    if (receiptError) {
      toast.error(`Error confirming transaction: ${receiptError.message}`); // Handle receipt error
      console.error("Receipt error:", receiptError);
    }
  }, [isConfirmed, receiptError]);

  return (
    <article className="mt-4 bg-[#000] p-4 rounded-lg">
      <div className="flex flex-row flex-1 mb-2 gap-4 bg-black p-2 rounded-lg">
        <div className="w-full h-10 bg-[#047857] rounded-lg text-center flex items-center justify-center">
          Crypto
        </div>
        <div className="w-full h-10 rounded-lg text-center text-white flex items-center justify-center">
          <p>Card</p>
        </div>
      </div>
      <Select />
      <div className="grid grid-cols-2 mt-2 gap-4 mb-4 rounded-lg bg-[#333] p-4">
        <div className="flex bg-[#000] rounded-lg p-4 flex-col">
          <label htmlFor="" className="text-[#ccc] text-sx text-left mb-2">
            You pay
          </label>
          <Input
            placeholder="00"
            name="amount"
            type="text"
            value={inputValue}
            handleChange={handleInputChange}
          />
        </div>
        <div className="flex bg-[#000] rounded-lg p-4 flex-col">
          <label htmlFor="" className="text-[#ccc] text-sx text-left mb-2">
            You get
          </label>
          <p className="text-base bg-[#333] rounded-sm h-10 text-white p-2 py-2">
            {pepeCoinAmount !== null ? Number(pepeCoinAmount).toFixed(2) : ""}
          </p>
        </div>
      </div>
      <Button
        type="button"
        className="w-full focus:outline-none text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-primary-btn-color"
        onClick={handleSendTransaction}
        disabled={loading || isPending}
      >
        {loading || isPending ? (
          <span className="flex items-center justify-center">
            <MiniSpinner /> <strong>Sending...</strong>
          </span>
        ) : (
          "Buy And Stake Pepe Coin"
        )}
      </Button>
      <Toaster /> {/* Include the Toaster component */}
    </article>
  );
}

export default Exchange;
