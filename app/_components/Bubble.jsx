// import Button from "./Button";

// import "@/app/_styles/style.css";
// import Start24Timer from "./Start24Timer";
// import { updateUser, userData } from "../_data/FetchAPI";
// import { useSession } from "next-auth/react";
// import { useEffect, useState } from "react";

// function Bubble() {
//   const [loading, setLoading] = useState(true); // State for loading
//   const [dailyClaim, setDailyClaim] = useState(null);
//   const { data: session, status } = useSession();
//   const ethereumId = session?.user?.ethereumId?.toLowerCase(); // Make sure ethereumId is lowercase

//   async function updateClaim() {
//     const res = await userData(ethereumId, setLoading);
//     setDailyClaim(res.todayClaim);
//     console.log(res);
//   }

//   useEffect(() => {
//     if (ethereumId) {
//       updateClaim(ethereumId);
//     }
//   }, [ethereumId]);

//   async function handleClick(e) {
//     e.preventDefault();
//     try {
//       const reward = e.target.dataset.key;
//       console.log(reward);

//       if (!reward) return;

//       const updateData = {
//         todayClaim: reward,
//       };

//       const res = await updateUser(ethereumId, updateData, setLoading);

//       if (res) {
//         console.log("todayClaim updated successfully:", res);
//       } else {
//         console.log("Failed to update todayClaim.");
//       }
//     } catch (error) {
//       console.log(error, "Error updating today Claim");
//     }
//   }

//   return (
//     <section className="bg-[#333] p-8  shadow-lg relative overflow-hidden my-24">
//       <div className="flex justify-evenly items-center p-5 relative overflow-hidden">
//         <div className="bubble bubble1"></div>
//         <div className="bubble bubble2"></div>
//         <div className="bubble bubble3"></div>
//         <div className="bubble bubble4"></div>
//         <div className="bubble bubble5"></div>
//         <div className="bubble bubble6"></div>
//         <div className="bubble bubble7"></div>
//         <div className="bubble bubble8"></div>
//         <div className="bubble bubble9"></div>
//         <div className="challenge-box space-y-4">
//           <h2 className=" text-primary-heading-color">Daily Challenge</h2>
//           <p id="challenge" className="text-white">
//             Complete today&apos;s task
//           </p>
//           <Button
//             id="claimButton button"
//             className="bg-primary-btn-color lg:py-4 lg:px-10"
//             onClick={handleClick}
//             value={10000}
//           >
//             Claim Now
//           </Button>
//           <p id="coins" className="text-white">
//             Coins Earned:{" "}
//             <strong className="text-primary-btn-color">
//               {dailyClaim || 0} PEPE TODAY!
//             </strong>
//           </p>

//           {/* <Start24Timer /> */}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Bubble;
// "use client";
// import Button from "./Button";
// import "@/app/_styles/style.css";
// import Start24Timer from "./Start24Timer";
// import { useEffect, useState } from "react";
// import { updateUser, userData } from "../_data/FetchAPI";
// import { useSession } from "next-auth/react";

// function Bubble() {
//   const [loading, setLoading] = useState(true); // State for loading
//   const [dailyClaim, setDailyClaim] = useState(null); // State to track daily claim amount
//   const { data: session, status } = useSession();
//   const ethereumId = session?.user?.ethereumId?.toLowerCase(); // Make sure ethereumId is lowercase
//   const [remainingTime, setRemainingTime] = useState(null); // State for remaining time
//   const [timerStart, setTimerStart] = useState(null); // State for timer start

//   // Function to update claim and fetch user data
//   async function updateClaim() {
//     const res = await userData(ethereumId, setLoading);
//     setDailyClaim(res.todayClaim);
//     setTimerStart(res.timerStart); // Fetch timerStart from the database
//     console.log(res);
//   }

//   // Fetch user data on component mount
//   useEffect(() => {
//     if (ethereumId) {
//       updateClaim(ethereumId);
//     }
//   }, [ethereumId]);

//   // Timer calculation logic
//   useEffect(() => {
//     if (timerStart) {
//       const timerDuration = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
//       const endTime = new Date(timerStart).getTime() + timerDuration; // Calculate end time
//       const currentTime = Date.now();
//       const timeRemaining = endTime - currentTime; // Calculate remaining time

//       console.log(timeRemaining, "this 127");
//       if (timeRemaining > 0) {
//         setRemainingTime(timeRemaining); // Set remaining time if not expired
//       } else {
//         setRemainingTime(0); // Set remaining time to zero if expired
//       }
//     } else {
//       // If there's no timerStart, set remainingTime to null
//       setRemainingTime(null);
//     }
//   }, [timerStart]);

//   // Handle claim button click
//   async function handleClick(e) {
//     e.preventDefault();
//     try {
//       const reward = e.target.dataset.key;
//       console.log(reward);

//       if (!reward) return;

//       // Prepare the update data
//       const updateData = {
//         todayClaim: reward,
//       };

//       // Check if there's an existing timer
//       if (!timerStart) {
//         // If no timer exists, set timerStart and other properties
//         updateData.timerStart = new Date(); // Start the timer when the button is clicked
//         updateData.timerExpired = false; // Set the timer as not expired
//         setRemainingTime(24 * 60 * 60 * 1000); // Reset remaining time to 24 hours
//       }

//       const res = await updateUser(ethereumId, updateData, setLoading);

//       if (res) {
//         console.log("todayClaim updated successfully:", res);
//       } else {
//         console.log("Failed to update todayClaim.");
//       }
//     } catch (error) {
//       console.log(error, "Error updating today Claim");
//     }
//   }

//   return (
//     <section className="bg-[#333] p-8 shadow-lg relative overflow-hidden my-24">
//       <div className="flex justify-evenly items-center p-5 relative overflow-hidden">
//         <div className="bubble bubble1"></div>
//         <div className="bubble bubble2"></div>
//         <div className="bubble bubble3"></div>
//         <div className="bubble bubble4"></div>
//         <div className="bubble bubble5"></div>
//         <div className="bubble bubble6"></div>
//         <div className="bubble bubble7"></div>
//         <div className="bubble bubble8"></div>
//         <div className="bubble bubble9"></div>
//         <div className="challenge-box space-y-4">
//           <h2 className="text-primary-heading-color">Daily Challenge</h2>
//           <p id="challenge" className="text-white">
//             Complete today&apos;s task
//           </p>

//           {status === "authenticated" ? (
//             <>
//               <Button
//                 id="claimButton"
//                 className={`bg-primary-btn-color lg:py-4 lg:px-10 ${
//                   remainingTime > 0 ? "opacity-[.5] pointer-events-none" : ""
//                 }`}
//                 onClick={handleClick}
//                 value={10000}
//                 disabled={remainingTime > 0} // Disable button if there is remaining time
//               >
//                 Claim Now
//               </Button>

//               <p id="coins" className="text-white">
//                 Coins Earned:{" "}
//                 <strong className="text-primary-btn-color">
//                   {dailyClaim || 0} PEPE TODAY!
//                 </strong>
//               </p>

//               {remainingTime !== null && remainingTime > 0 ? (
//                 <Start24Timer remainingTime={remainingTime} />
//               ) : (
//                 <p className="text-white">No active timer available.</p>
//               )}
//             </>
//           ) : (
//             <p className="text-white">Please sign in to claim rewards.</p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Bubble;

// "use client";
// import Button from "./Button";
// import "@/app/_styles/style.css";
// import Start24Timer from "./Start24Timer";
// import { useEffect, useState } from "react";
// import { updateUser, userData } from "../_data/FetchAPI";
// import { useSession } from "next-auth/react";

// function Bubble({
//   dailyClaim,
//   timerStart,
//   setUpdateTimerStart,
//   setUpdateDailyClaim,
//   setupdateTimeExpired,
// }) {
//   const [loading, setLoading] = useState(true); // State for loading
//   const [dailyClaim, setDailyClaim] = useState(0); // State to track daily claim amount
//   const { data: session, status } = useSession();
//   const ethereumId = session?.user?.ethereumId?.toLowerCase(); // Ensure ethereumId is lowercase
//   const [remainingTime, setRemainingTime] = useState(null); // State for remaining time
//   const [timerStart, setTimerStart] = useState(null); // State for timer start
//   const [timeExpired, setTimeExpired] = useState(true); // State for timer expiration

//   // Fetch user data on component mount

//   // Timer calculation logic
//   useEffect(() => {
//     if (timerStart) {
//       const timerDuration = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
//       const endTime = new Date(timerStart).getTime() + timerDuration; // Calculate end time
//       const currentTime = Date.now();
//       const elapsedTime = currentTime - new Date(timerStart).getTime(); // Calculate elapsed time

//       console.log(elapsedTime, "this time that is past");
//       // Calculate remaining time
//       const timeRemaining = Math.max(endTime - currentTime, 0); // Ensure it doesn't go below zero

//       console.log(timeRemaining, "this the remaining time");
//       if (timeRemaining > 0) {
//         setRemainingTime(timeRemaining); // Set remaining time if timer is still running
//         setTimeExpired(false); // Timer is active
//       } else {
//         setRemainingTime(0); // Timer expired
//         setTimeExpired(true); // Timer has expired
//       }
//     }
//   }, [timerStart]);

//   // Handle claim button click
//   async function handleClick(e) {
//     e.preventDefault();
//     try {
//       const reward = e.target.dataset.key;

//       if (!reward) return;

//       setUpdateDailyClaim(reward);
//       if (!timerStart || timeExpired) {
//         // If no timer or timer expired, allow claim and reset the timer
//         setUpdateTimerStart(new Date())
//         setupdateTimeExpired(false)

//         setRemainingTime(24 * 60 * 60 * 1000); // Reset timer to 24 hours
//         setTimeExpired(false); // Reset timer expiration state
//       }

//       const res = await updateUser(ethereumId, updateData, setLoading);

//       if (res) {
//         console.log("todayClaim updated successfully:", res);
//         setDailyClaim(res.todayClaim); // Update the daily claim in state
//         setTimerStart(res.timerStart); // Update timer start in state
//       } else {
//         console.log("Failed to update todayClaim.");
//       }
//     } catch (error) {
//       console.log(error, "Error updating today Claim");
//     }
//   }

//   return (
//     <section className="bg-[#333] p-8 shadow-lg relative overflow-hidden my-24">
//       <div className="flex justify-evenly items-center p-5 relative overflow-hidden">
//         <div className="bubble bubble1"></div>
//         <div className="bubble bubble2"></div>
//         <div className="bubble bubble3"></div>
//         <div className="bubble bubble4"></div>
//         <div className="bubble bubble5"></div>
//         <div className="bubble bubble6"></div>
//         <div className="bubble bubble7"></div>
//         <div className="bubble bubble8"></div>
//         <div className="bubble bubble9"></div>
//         <div className="challenge-box space-y-4">
//           <h2 className="text-primary-heading-color">Daily Challenge</h2>
//           <p id="challenge" className="text-white">
//             Complete today&apos;s task
//           </p>

//           {status === "authenticated" ? (
//             <>
//               <Button
//                 id="claimButton"
//                 className={`bg-primary-btn-color lg:py-4 lg:px-10 ${
//                   remainingTime > 0 ? "opacity-[.5] pointer-events-none" : ""
//                 }`}
//                 onClick={handleClick}
//                 value={10000}
//                 disabled={remainingTime > 0} // Disable button if timer is active
//               >
//                 {remainingTime > 0 ? "Claim Not Available" : "Claim Now"}
//               </Button>

//               <p id="coins" className="text-white">
//                 Coins Earned:{" "}
//                 <strong className="text-primary-btn-color">
//                   {dailyClaim || 0} PEPE TODAY!
//                 </strong>
//               </p>

//               {remainingTime !== null && remainingTime > 0 ? (
//                 <Start24Timer initialTime={remainingTime} />
//               ) : (
//                 <p className="text-white">No active timer available.</p>
//               )}
//             </>
//           ) : (
//             <p className="text-white">Please sign in to claim rewards.</p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Bubble;

"use client";
import Button from "./Button";
import "@/app/_styles/style.css";
import Start24Timer from "./Start24Timer";
import { useEffect, useState } from "react";

function Bubble({
  dailyClaim,
  timerStart,
  setUpdateTimerStart,
  setUpdateDailyClaim,
  setUpdateTimeExpired,
}) {
  const [remainingTime, setRemainingTime] = useState(null); // Remaining time for the 24-hour timer
  const [timeExpired, setTimeExpired] = useState(true); // State for timer expiration

  // Timer logic to calculate remaining time based on `timerStart`
  const handleTimer = () => {
    if (!timerStart) {
      setRemainingTime(null);
      setTimeExpired(true);
      return;
    }

    const currentTime = Date.now();
    const timerDuration = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    const endTime = new Date(timerStart).getTime() + timerDuration;
    const timeRemaining = Math.max(endTime - currentTime, 0); // Calculate remaining time (0 if expired)

    setRemainingTime(timeRemaining);
    setTimeExpired(timeRemaining === 0);
  };

  // Call `handleTimer` to calculate remaining time whenever `timerStart` changes
  useEffect(() => {
    handleTimer();
  }, [timerStart]);

  // Handle the claim button click event
  const handleClaimClick = async (e) => {
    e.preventDefault();
    const reward = e.target.value || 1000; // Set reward, fallback to 10000 if not provided

    if (timeExpired) {
      try {
        // Call the functions passed as props to update the timer and claim states
        setUpdateDailyClaim(reward); // Update daily claim
        setUpdateTimerStart(new Date()); // Reset the timer start time
        setUpdateTimeExpired(false); // Mark timer as not expired
        handleTimer(); // Reset the timer logic locally
        console.log("Claim successful!");
      } catch (error) {
        console.error("Error updating claim:", error);
      }
    } else {
      console.log("Timer is still active. Claim not available.");
    }
  };

  return (
    <section className="bg-[#333] p-8 shadow-lg relative overflow-hidden my-24 section-daily">
      <div className="flex justify-evenly items-center p-5 relative overflow-hidden">
        {/* Render bubble elements */}
        {[...Array(9).keys()].map((_, idx) => (
          <div key={idx} className={`bubble bubble${idx + 1}`}></div>
        ))}

        <div className="challenge-box space-y-4">
          <h2 className="text-primary-heading-color">Daily Challenge</h2>
          <p id="challenge" className="text-white">
            Complete today&apos;s task
          </p>

          {/* Conditionally render claim button if timer has expired */}
          <>
            <Button
              id="claimButton"
              className={`bg-primary-btn-color lg:py-4 lg:px-10 ${
                remainingTime > 0 ? "opacity-50 pointer-events-none" : ""
              }`}
              onClick={handleClaimClick}
              value={10000}
              disabled={remainingTime > 0} // Disable the button if there's remaining time
            >
              {remainingTime > 0 ? "Claim Not Available" : "Claim Now"}
            </Button>

            <p id="coins" className="text-white">
              Coins Earned:{" "}
              <strong className="text-primary-btn-color">
                {dailyClaim || 0} PEPE TODAY!
              </strong>
            </p>

            {/* Render timer component if there's remaining time */}
            {remainingTime !== null && remainingTime > 0 ? (
              <Start24Timer initialTime={remainingTime} />
            ) : (
              <p className="text-white">No active timer available.</p>
            )}
          </>
        </div>
      </div>
    </section>
  );
}

export default Bubble;
