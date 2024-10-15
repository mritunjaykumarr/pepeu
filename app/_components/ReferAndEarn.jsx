"use client";
import { useState, useEffect, useCallback } from "react";
import Bubble from "./Bubble";
import Footer from "./Footer";
import InfoBox from "./InfoBox";
import InfoCard from "./InfoCard";
import ReferHeader from "./ReferHeader";
import ReferInfo from "./ReferInfo";
import ReferWork from "./ReferWork";
import Task from "./Task";
import "@/app/_styles/style.css";
import { useSession } from "next-auth/react";
import Spinner from "./Spinner";
import { createUser, updateUser, userData } from "../_data/FetchAPI";

// function ReferAndEarn() {
//   const [referCode, setReferCode] = useState(null);
//   const [referBalance, setReferBalance] = useState(null);
//   // const [todayClaim, setTodayClaim] = useState(null);
//   const [referUserCount, setReferUserCount] = useState(null);
//   const [totalBalance, setTotalBalance] = useState(null);
//   const [totalEarnDay, setTotalEarnDay] = useState(null);
//   const [loading, setLoading] = useState(true); // State for loading

//   const { data: session, status } = useSession();
//   const ethereumId = session?.user?.ethereumId?.toLowerCase(); // Make sure ethereumId is lowercase

//   console.log(ethereumId, "this from comming from session");
//   useEffect(() => {
//     if (status === "authenticated" && ethereumId) {
//       fetchUserData(ethereumId);
//     } else {
//       // Clear state if the session is invalid or user is logged out
//       resetState();
//       setLoading(false); // Stop the loader when session is invalid
//     }
//   }, [status, ethereumId]);

//   const fetchUserData = async (ethereumId) => {
//     try {
//       setLoading(true); // Start loading when fetching data

//       const user = await userData(ethereumId, setLoading); // Fetch user data from API
//       if (user) {
//         // If user data exists, update state
//         setReferCode(user.referralCode);
//         setReferBalance(user.referEarn);
//         setReferUserCount(user.referredUsers.length);
//         // setTodayClaim(user.todayClaim);
//         setTotalEarnDay(user.totalEarnDay);
//         setTotalBalance(user.totalBalance);
//       }
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     } finally {
//       setLoading(false); // Stop loading after data is fetched or error occurs
//     }
//   };

//   // Function to reset state when no session is found or user logs out
//   const resetState = () => {
//     setReferCode(null);
//     setReferBalance(null);
//     setReferUserCount(null);
//     // setTodayClaim(null);
//     setTotalBalance(null);
//     setTotalEarnDay(null);
//   };

//   // Render loading spinner if data is still loading
//   if (loading) {
//     return (
//       <div className="flex justify-center h-screen items-center bg-[#333] gap-5">
//         <Spinner /> {/* Render spinner */}
//         <p className="text-base text-white">Loading data...</p>
//       </div>
//     );
//   }

//   // UPDATING THE USER --->

//   // const updateUserAccount = async () => {
//   //   try {
//   //     const updateData = {
//   //       totalBalance: 5000,
//   //       todayClaim: 6000,
//   //       totalEarnDay: 7000,
//   //       referEarn: 20000,
//   //     };
//   //     const res = await updateUser(ethereumId, updateData, setLoading);
//   //     console.log(res);
//   //   } catch (error) {
//   //     console.log(error, " : Error updating user");
//   //   }
//   // };

//   //FOR REFERED USER

//   return (
//     <section>
//       <ReferHeader totalBalance={totalBalance} />
//       <div className="relative w-full overflow-hidden bg-blue-500 text-white py-2 shadow-lg flex items-center">
//         <div className="sticky top-0 bg-blue-500 text-white font-bold px-2 z-10 whitespace-nowrap">
//           Instruction:
//         </div>
//         <div className="marquee">
//           Please follow the instructions carefully to complete the task. These
//           points will be converted into PEPE coins.
//         </div>
//       </div>
//       <div className="container-div space-y-10">
//         <Task totalEarnDay={totalEarnDay} />
//         <InfoCard />
//       </div>
//       <InfoBox />
//       <Bubble />
//       <ReferInfo
//         referCode={referCode}
//         referUserCount={referUserCount}
//         referBalance={referBalance}
//       />
//       <ReferWork />
//       <div className="bg-black">
//         <Footer />
//       </div>
//     </section>
//   );
// }

// export default ReferAndEarn;

// function ReferAndEarn() {
//   const [referCode, setReferCode] = useState(null);
//   const [referBalance, setReferBalance] = useState(null);
//   const [referUserCount, setReferUserCount] = useState(null);
//   const [totalBalance, setTotalBalance] = useState(null);
//   const [totalEarnDay, setTotalEarnDay] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const { data: session, status } = useSession();
//   const ethereumId = session?.user?.ethereumId?.toLowerCase();

//   useEffect(() => {
//     if (status === "authenticated" && ethereumId) {
//       fetchUserData(ethereumId);
//     } else {
//       resetState();
//       setLoading(false);
//     }
//   }, [status, ethereumId]);

//   const fetchUserData = async (ethereumId) => {
//     try {
//       setLoading(true);
//       const user = await userData(ethereumId, setLoading);
//       if (user) {
//         setReferCode(user.referralCode);
//         setReferBalance(user.referEarn);
//         setReferUserCount(user.referredUsers.length);
//         setTotalEarnDay(user.totalEarnDay);
//         setTotalBalance(user.totalBalance);
//       }
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetState = () => {
//     setReferCode(null);
//     setReferBalance(null);
//     setReferUserCount(null);
//     setTotalBalance(null);
//     setTotalEarnDay(null);
//   };

//   // Function to handle state updates after a successful update
//   const handleDataUpdate = (newData) => {
//     setReferBalance(newData.referEarn || referBalance);
//     setTotalEarnDay(newData.totalEarnDay || totalEarnDay);
//     setTotalBalance(newData.totalBalance || totalBalance);
//     setReferUserCount(newData.referredUsers?.length || referUserCount);
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center h-screen items-center bg-[#333] gap-5">
//         <Spinner />
//         <p className="text-base text-white">Loading data...</p>
//       </div>
//     );
//   }

//   return (
//     <section>
//       <ReferHeader totalBalance={totalBalance} />
//       <div className="relative w-full overflow-hidden bg-blue-500 text-white py-2 shadow-lg flex items-center">
//         <div className="sticky top-0 bg-blue-500 text-white font-bold px-2 z-10 whitespace-nowrap">
//           Instruction:
//         </div>
//         <div className="marquee">
//           Please follow the instructions carefully to complete the task. These
//           points will be converted into PEPE coins.
//         </div>
//       </div>
//       <div className="container-div space-y-10">
//         <Task totalEarnDay={totalEarnDay} onTaskCompletion={handleDataUpdate} />
//         <InfoCard />
//       </div>
//       <InfoBox />
//       <Bubble />
//       <ReferInfo />
//       <ReferWork />
//       <div className="bg-black">
//         <Footer />
//       </div>
//     </section>
//   );
// }

// export default ReferAndEarn;

//setDailyClaim(res.todayClaim);
//setTimerStart(res.timerStart);

function ReferAndEarn() {
  const [totalBalance, setTotalBalance] = useState(0);
  const [totalEarnDay, setTotalEarnDay] = useState(0);
  const [socialLink, setSocialLink] = useState([]);
  const [dailyClaim, setDailyClaim] = useState(0);
  const [timerStart, setTimerStart] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [referralCode, setReferralCode] = useState("");
  const [referEarn, setReferEarn] = useState(0);
  const [referCount, setReferCount] = useState(0);
  const [href, setHref] = useState(null);
  const [reward, setReward] = useState(null);
  const [updateTimerStart, setUpdateTimerStart] = useState(null);
  const [updateDailyClaim, setUpdateDailyClaim] = useState(0);
  const [updateTimeExpired, setUpdateTimeExpired] = useState(true);

  const { data: session, status } = useSession();
  const ethereumId = session?.user?.ethereumId?.toLowerCase();

  // Fetch user data function
  const fetchUserData = useCallback(async () => {
    if (!ethereumId) return;

    const user = await userData(ethereumId, setIsLoading);
    setTotalBalance(user.totalBalance);
    setReferralCode(user.referralCode);
    setDailyClaim(user.todayClaim);
    setTotalEarnDay(user.totalEarnDay);
    setReferEarn(user.referEarn);
    setSocialLink(user.socialLinks);
    setTimerStart(user.timerStart);
    setReferCount(user.referredUsers?.length);
  }, [ethereumId]);

  // Update user task function
  const updateUserTask = useCallback(async () => {
    if (ethereumId && href && reward) {
      const updateData = {
        socialLinks: [href], // Wrap href in an array if multiple links are expected
        totalEarnDay: Number(reward),
        todayClaim: Number(updateDailyClaim),
        timerStart: updateTimerStart,
        timerExpired: updateTimeExpired,
      };

      console.log({
        ethereumId,
        href,
        reward,
        updateDailyClaim,
        updateTimerStart,
        updateTimeExpired,
      });

      await updateUser(ethereumId, updateData, setIsLoading);
      fetchUserData(); // Refetch data after update
    }
  }, [
    ethereumId,
    href,
    reward,
    updateDailyClaim,
    updateTimerStart,
    updateTimeExpired,
    fetchUserData,
  ]);

  // Fetch user data on Ethereum ID change or session authentication
  useEffect(() => {
    if (ethereumId) {
      fetchUserData();
    }
  }, [ethereumId, fetchUserData]);

  // Trigger task update when href or reward changes
  useEffect(() => {
    if (href && reward) {
      updateUserTask(); // Call user update only when both href and reward are set
    }
  }, [href, reward, updateUserTask]);

  return (
    <section>
      {status === "authenticated" && (
        <ReferHeader totalBalance={totalBalance} />
      )}
      <div className="relative w-full overflow-hidden bg-blue-500 text-white py-2 shadow-lg flex items-center">
        <div className="sticky top-0 bg-blue-500 text-white font-bold px-2 z-10 whitespace-nowrap">
          Instruction:
        </div>
        <div className="marquee">
          Please follow the instructions carefully to complete the task. These
          points will be converted into PEPE coins.
        </div>
      </div>
      <div className="container-div space-y-10">
        <Task
          totalEarnDay={totalEarnDay}
          socialLink={socialLink}
          setHref={setHref}
          setReward={setReward}
        />
        <InfoCard /> {/* No props required */}
      </div>
      <InfoBox /> {/* No props required */}
      <Bubble
        dailyClaim={dailyClaim}
        timerStart={timerStart}
        setUpdateDailyClaim={setUpdateDailyClaim}
        setUpdateTimerStart={setUpdateTimerStart}
        setUpdateTimeExpired={setUpdateTimeExpired}
      />
      <ReferInfo
        referralCode={referralCode}
        referEarn={referEarn}
        referCount={referCount}
      />
      <ReferWork />
      <div className="bg-black">
        <Footer />
      </div>
    </section>
  );
}

export default ReferAndEarn;
