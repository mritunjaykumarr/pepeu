// // "use client";
// // import { useState } from "react";

// // import "@/app/_styles/style.css";
// // import { handleCopy } from "../_utlis/CopyToClipboard";
// // import { Toaster } from "react-hot-toast";

// // function ReferInfo({ referCode, referUserCount, referBalance }) {
// //   // const [token ,setToken] = useState([0])

// //   const baseUrl = window?.location.origin;
// //   //token.length>0 ? token: ""

// //   const referLink = referCode ? `${baseUrl}/referral?code=${referCode}` : "";

// //   return (
// //     <section id="referralInfo" class="section-el ">
// //       <div class="infoBox ">
// //         <h3>Your Referral Link</h3>
// //         <input
// //           type="text"
// //           id="referralLink"
// //           class="input"
// //           readOnly=""
// //           defaultValue={referLink}
// //         />
// //         <button
// //           id="copyLinkButton button"
// //           onClick={() => handleCopy(referLink)}
// //         >
// //           Copy Link
// //         </button>
// //       </div>
// //       <div class="infoBox">
// //         <h3>Your Referrals</h3>
// //         <p>
// //           <span id="referralCount">{referUserCount || 0}</span> Friends Referred
// //         </p>
// //       </div>
// //       <div class="infoBox">
// //         <h3>Earnings From Referrals</h3>
// //         <p>
// //           <span id="referralEarnings">{referBalance || 0}</span> Points Earned
// //         </p>
// //       </div>
// //       <Toaster />
// //     </section>
// //   );
// // }

// // export default ReferInfo;

// "use client";
// import { useEffect, useState } from "react";

// import "@/app/_styles/style.css";
// import { handleCopy } from "../_utlis/CopyToClipboard";
// import { Toaster } from "react-hot-toast";
// import { useSession } from "next-auth/react";

// function ReferInfo() {
//   const [baseUrl, setBaseUrl] = useState("");
//   const [referLink, setReferLink] = useState("");
//   const [referCode, setReferCode] = useState(null);
//   const [referBalance, setReferBalance] = useState(null);
//   const [referUserCount, setReferUserCount] = useState(null);
//   const {data:session,status} = useSession()
//   const ethereumId = session?.user?.ethereumId?.toLowerCase();
//    const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Set baseUrl only in the client environment
//     const url = window.location.origin;
//     setBaseUrl(url);

//     if (referCode) {
//       setReferLink(`${url}/referral?code=${referCode}`);
//     }
//   }, [referCode]);

//   const fetchUserData = async()=>{
//     try{
//       setLoading(true)
//       const user = await userData(ethereumId,setLoading)
//       if (user) {
//         setReferCode(user.referralCode);
//         setReferBalance(user.referEarn);
//         setReferUserCount(user.referredUsers.length);
//         setTotalEarnDay(user.totalEarnDay);
//         setTotalBalance(user.totalBalance);
//       }
//     }catch(error){
//       console.error("Error fetching user data:", error);
//       setLoading(false);
//     }
//   }

//   useEffect(()=>{
//     fetchUserData()
//   },[fetchUserData])

//   return (
//     <section id="referralInfo" className="section-el">
//       <div className="infoBox">
//         <h3>Your Referral Link</h3>
//         <input
//           type="text"
//           id="referralLink"
//           className="input"
//           readOnly
//           value={referLink} // Use value instead of defaultValue
//         />
//         <button id="copyLinkButton" onClick={() => handleCopy(referLink)}>
//           Copy Link
//         </button>
//       </div>
//       <div className="infoBox">
//         <h3>Your Referrals</h3>
//         <p>
//           <span id="referralCount">{referUserCount || 0}</span> Friends Referred
//         </p>
//       </div>
//       <div className="infoBox">
//         <h3>Earnings From Referrals</h3>
//         <p>
//           <span id="referralEarnings">{referBalance || 0}</span> Points Earned
//         </p>
//       </div>
//       <Toaster />
//     </section>
//   );
// }

// export default ReferInfo;

"use client";

import "@/app/_styles/style.css";
import { handleCopy } from "../_utlis/CopyToClipboard";
import { Toaster } from "react-hot-toast";

function ReferInfo({ referralCode, referEarn = 0, referCount = 0 }) {
  const baseUrl = typeof window !== "undefined" ? window.location.origin : ""; // Ensure this only runs on the client
  const referLink = referralCode
    ? `${baseUrl}/referral?code=${referralCode}`
    : "";

  return (
    <section id="referralInfo" className="section-el">
      <div className="infoBox">
        <h3>Your Referral Link</h3>
        <input
          type="text"
          id="referralLink"
          className="input"
          readOnly
          value={referLink} // Using value to bind the input
        />
        <button id="copyLinkButton" onClick={() => handleCopy(referLink)}>
          Copy Link
        </button>
      </div>
      <div className="infoBox">
        <h3>Your Referrals</h3>
        <p>
          <span id="referralCount">{referCount}</span> Friends Referred
        </p>
      </div>
      <div className="infoBox">
        <h3>Earnings From Referrals</h3>
        <p>
          <span id="referralEarnings">{referEarn}</span> Points Earned
        </p>
      </div>
      <Toaster />
    </section>
  );
}

export default ReferInfo;
