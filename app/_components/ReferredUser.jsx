// "use client";
// import { useEffect, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { updateReferredUser } from "../_data/FetchAPI";

// function ReferredUser() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const search = useSearchParams();
//   const code = search.get("code");
//   const router = useRouter();

//   async function referredPage() {
//     try {
//       const updateData = {
//         ethereumId: "0xd2E67941E731fD61aF6c5336c0762AA2DA1E6afw".toLowerCase(),
//       };
//       const referUser = await updateReferredUser(
//         code,
//         updateData,
//         setIsLoading
//       );

//       if (referUser) {
//         // Redirect to home page upon successful update
//         router.push("/"); // Change "/" to your home page route
//       }
//     } catch (error) {
//       console.log("Error while referring the user!", error);
//       setError("Failed to refer user. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   // Call `referredPage` when component mounts
//   useEffect(() => {
//     if (code) {
//       referredPage();
//     }
//   }, [code]);

//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       {isLoading ? (
//         <p className="text-xl">Loading...</p>
//       ) : error ? (
//         <p className="text-xl text-red-500">{error}</p>
//       ) : (
//         <p className="text-xl text-green-500">Referral code applied: {code}</p>
//       )}
//     </div>
//   );
// }

// export default ReferredUser;

"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { updateReferredUser } from "../_data/FetchAPI";
import Header from "./Header";
import { useSession } from "next-auth/react";
import Spinner from "./Spinner";
import { useAccount } from "wagmi";
import ReferAndEarn from "./ReferAndEarn";

function ReferredUser() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isRedirected, setIsRedirected] = useState(false);
  const search = useSearchParams();
  const code = search.get("code");
  const { address } = useAccount();

  console.log(address);
  // const { data: session, status } = useSession();
  // const ethereumId = session?.user?.ethereumId?.toLowerCase();

  async function referredPage() {
    try {
      const updateData = {
        ethereumId: address?.toLowerCase(),
        referAmount: 1000,
      };
      const referUser = await updateReferredUser(
        code,
        updateData,
        setIsLoading
      );

      if (referUser && referUser.success) {
        setIsRedirected(true);
      } else {
        setError("Failed to refer user. Please try again.");
      }
    } catch (error) {
      console.log("Error while referring the user!", error);
      setError("Failed to refer user. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (code) {
      referredPage();
    } else {
      setError("No referral code provided.");
      setIsLoading(false);
    }
  }, [code]);

  return (
    <main>
      <Header className="bg-[#06b482]" />
      <ReferAndEarn />
    </main>
  );
}

export default ReferredUser;
