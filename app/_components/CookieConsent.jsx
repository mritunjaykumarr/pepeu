// // components/CookieConsent.js
// "use client";
// import { useEffect, useState } from "react";

import { cookies } from "next/headers";

// const CookieConsent = () => {
//   const [showBanner, setShowBanner] = useState(false);

//   // Check if the cookieConsent cookie is set
//   useEffect(() => {
//     const cookieConsent = document.cookie
//       .split("; ")
//       .find((row) => row.startsWith("cookieConsent="));
//     if (!cookieConsent) {
//       setShowBanner(true); // Show banner if cookieConsent is not found
//     }
//   }, []);

//   const handleAcceptAllCookies = async () => {
//     // Set cookies via a server-side API route
//     const response = await fetch("/api/set-cookie", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ consent: "accepted" }),
//     });

//     if (response.ok) {
//       setShowBanner(false); // Hide the banner
//     }
//   };

//   const handleDeclineCookies = async () => {
//     // Set cookies via a server-side API route
//     await fetch("/api/set-cookie", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ consent: "declined" }),
//     });

//     setShowBanner(false); // Hide the banner
//   };

//   if (!showBanner) {
//     return null; // Don't render the banner if cookieConsent is set
//   }

//   return (
//     <div className="cookie-banner">
//       <p>
//         We use cookies to improve Pepe Layer2’s site. Some cookies are necessary
//         for our website and services to function properly. Other cookies are
//         optional and help personalize your experience, including advertising and
//         analytics. You can consent to all cookies, decline all optional cookies,
//         or manage optional cookies. Without a selection, our default cookie
//         settings will apply. You can change your preferences at any time. To
//         learn more, check out our{" "}
//         <a href="#" target="_blank" rel="noopener noreferrer">
//           Cookie Policy
//         </a>
//         .
//       </p>
//       <div className="cookie-buttons">
//         <button onClick={handleAcceptAllCookies}>Accept All Cookies</button>
//         <button onClick={handleDeclineCookies}>Decline Optional Cookies</button>
//       </div>
//     </div>
//   );
// };

// export default CookieConsent;

// function CookieConsent() {
//   const cookieStore = cookies();
//   const userId = cookieStore.get("user_id");
//   console.log(userId, cookieStore);
//   return <div>{userId && <p>User ID: {userId}</p>}</div>;
// }

// export default CookieConsent;
