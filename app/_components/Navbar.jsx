"use client";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { usePathname } from "next/navigation";
import { signIn, signOut } from "next-auth/react";
import { createUser, userData } from "../_data/FetchAPI";
import tokenGenerator from "../_utlis/tokenGenerator";
import { useEffect, useState } from "react";
import MiniSpinner from "./MiniSpinner";
import Button from "./Button";

const token = tokenGenerator();

function Navbar({ isOpen, setIsOpen }) {
  const [mounted, setMounted] = useState(false); // Ensures client-side rendering
  const pathname = usePathname();
  const { address, isConnected } = useAccount();
  const [isCreatingUser, setIsCreatingUser] = useState(false);

  // address of wallet
  const ethereumId = address?.toLowerCase();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Set mounted to true on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  // Function for signing in the user
  const handleSignIn = async () => {
    try {
      const res = await signIn("credentials", {
        address,
        redirect: false,
      });

      if (res?.error) {
        console.log("Sign in failed.");
      } else {
        console.log("Signed in successfully!");
      }
    } catch (error) {
      console.log("An error occurred during sign in.");
    }
  };

  // Sign out when wallet disconnects
  const handleSignOut = async () => {
    await signOut({ redirect: false });
  };

  useEffect(() => {
    if (!isConnected) {
      handleSignOut(); // Sign out if disconnected
    }
  }, [isConnected]);

  // Function for creating an account
  const handleCreateUser = async () => {
    if (isConnected && address) {
      const userDetails = {
        ethereumId: ethereumId,
        referralCode: token,
      };

      try {
        const existingUser = await userData(ethereumId, setIsCreatingUser);

        if (!existingUser) {
          const result = await createUser(userDetails, setIsCreatingUser);
          if (result) {
            await handleSignIn(); // Automatically sign in the user after account creation
          } else {
            console.log("Failed to create user.");
          }
        } else {
          console.log("User already exists. Automatically signing in.");
          await handleSignIn();
        }
      } catch (error) {
        console.log("An error occurred while creating the user.");
      }
    }
  };

  // Automatically create account and sign in when connected to MetaMask
  useEffect(() => {
    if (isConnected && address) {
      handleCreateUser();
    }
  }, [isConnected, address]);

  // Render nothing if the component is not mounted yet
  if (!mounted) return null;

  return (
    <nav
      className={`lg:flex ${
        isOpen ? "block" : "hidden"
      } lg:block transition-all duration-300`}
    >
      <ul className="flex gap-12 items-center lg:flex-row flex-col">
        {pathname === "/" && (
          <>
            <li>
              <Link
                href="#tokenomics"
                className="nav-link"
                onClick={toggleMenu}
              >
                TOKENOMICS
              </Link>
            </li>
            <li>
              <Link href="#roadmap" className="nav-link" onClick={toggleMenu}>
                Roadmap
              </Link>
            </li>
            <li>
              <Link href="#how" className="nav-link">
                How to Buy
              </Link>
            </li>
            <Button className={"px-10 bg-primary-btn-color"}>
              <Link href="/buy" onClick={toggleMenu}>
                Buy Now
              </Link>
            </Button>
          </>
        )}

        {pathname === "/airDrop" && (
          <>
            <li>
              <Link href="/" className="nav-link" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#roadmap" className="nav-link" onClick={toggleMenu}>
                Roadmap
              </Link>
            </li>
            <ConnectButton />
          </>
        )}

        {pathname === "/buy" && (
          <>
            <li>
              <Link href="/" className="nav-link" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#roadmap" className="nav-link" onClick={toggleMenu}>
                Roadmap
              </Link>
            </li>
            <li>
              <Link
                href="/claimairdrops"
                className="nav-link"
                onClick={toggleMenu}
              >
                Claim Air Drop
              </Link>
            </li>
            <ConnectButton />
          </>
        )}

        {pathname === "/referral" && (
          <li>
            <ConnectButton />
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
