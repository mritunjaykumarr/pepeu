// import User from "@/models/UserModel";
// import { connectToDB } from "@/mongodb";
// import { NextResponse } from "next/server";

// export const PATCH = async (req, { params }) => {
//   try {
//     await connectToDB();
//     const { ethereumId } = params;
//     const body = await req.json();

//     console.log(ethereumId, body, "this line 🧍‍♂️🧍‍♂️🧍‍♂️");
//     const {
//       totalBalance,
//       todayClaim,
//       totalEarnDay,
//       referEarn,
//       socialLinks,
//       referredUsers,
//     } = body;

//     const updatedUser = await User.findOneAndUpdate(
//       { ethereumId: ethereumId },
//       {
//         totalBalance,
//         todayClaim,
//         totalEarnDay,
//         referEarn,
//         socialLinks,
//         referredUsers,
//       },
//       { new: true }
//     );

//     console.log(updatedUser, "this updated data");

//     return new Response(JSON.stringify(updatedUser), { status: 200 });
//   } catch (error) {
//     return new NextResponse("Failed to update user", { status: 500 });
//   }
// };

// import User from "@/models/UserModel";
// import { connectToDB } from "@/mongodb";
// import { NextResponse } from "next/server";

// export const PATCH = async (req, { params }) => {
//   try {
//     await connectToDB();
//     const { ethereumId } = params;
//     const body = await req.json();

//     console.log(ethereumId, body, "this line 🧍‍♂️🧍‍♂️🧍‍♂️");

//     const {
//       totalBalance,
//       todayClaim,
//       totalEarnDay,
//       referEarn,
//       socialLinks, // Array to be updated without duplicates
//       referredUsers,
//       timerStart,
//       timerExpired
//     } = body;

//     // Create update object
//     const updateData = {
//       totalBalance,
//       referEarn,
//       referredUsers,
//     };

//     // If `socialLinks` is provided and contains new data
//     if (socialLinks && socialLinks.length > 0) {
//       // Add `socialLinks` without duplicates using `$addToSet`
//       updateData.$addToSet = { socialLinks: { $each: socialLinks } };

//       updateData.$inc = { totalEarnDay }; // Increment `totalEarnDay`
//     }

//     // updating daily claim and start timer
//     updateData.$inc = { todayClaim };
//     // Set timer fields when starting the timer
//     const currentTime = new Date();
//     updateData.timerStart = currentTime; // Start the timer
//     updateData.timerExpired = false; // Set timer not expired

//     // Update the user document
//     const updatedUser = await User.findOneAndUpdate(
//       { ethereumId: ethereumId },
//       updateData,
//       { new: true }
//     );

//     console.log(updatedUser, "this updated data");

//     return new Response(JSON.stringify(updatedUser), { status: 200 });
//   } catch (error) {
//     console.error("Error updating user:", error);
//     return new NextResponse("Failed to update user", { status: 500 });
//   }
// };

// Add `socialLinks` only if provided in the request
// if (socialLinks && socialLinks.length > 0) {
//   updateData.$addToSet = { socialLinks: { $each: socialLinks } };
// }

// import User from "@/models/UserModel";
// import { connectToDB } from "@/mongodb";
// import { NextResponse } from "next/server";

// export const PATCH = async (req, { params }) => {
//   try {
//     // Connect to the database
//     await connectToDB();

//     // Extract ethereumId from the params and body data from the request
//     const { ethereumId } = params;
//     const body = await req.json();

//     console.log(ethereumId, body, "this line 🧍‍♂️🧍‍♂️🧍‍♂️");

//     // Destructure the incoming data with default values to prevent errors
//     const {
//       totalBalance = 0,
//       todayClaim = 0,
//       totalEarnDay = 0,
//       referEarn = 0,
//       socialLinks = [], // Default to an empty array if not provided
//       referredUsers = [], // Default to an empty array if not provided
//     } = body;

//     // Create the update object
//     const updateData = {
//       $inc: {
//         todayClaim, // Increment by the provided `todayClaim` value
//         totalEarnDay, // Increment by the provided `totalEarnDay` value
//       },
//       $set: {
//         totalBalance: todayClaim || 0 + totalEarnDay || 0 + referEarn || 0, // Calculate the total balance
//       },
//       // Set timer properties
//       timerStart: new Date(), // Start the timer
//       timerExpired: false, // Mark the timer as not expired
//     };

//     // Update `socialLinks` if new ones are provided without adding duplicates
//     if (socialLinks.length > 0) {
//       updateData.$addToSet = { socialLinks: { $each: socialLinks } };
//     }

//     // Find the user by ethereumId and update the document
//     const updatedUser = await User.findOneAndUpdate(
//       { ethereumId: ethereumId },
//       updateData,
//       { new: true } // Return the updated document
//     );

//     // Log the updated data for debugging
//     console.log(updatedUser, "this updated data");

//     // Return the updated user document in the response
//     return new Response(JSON.stringify(updatedUser), { status: 200 });
//   } catch (error) {
//     // Handle and log any errors during the update process
//     console.error("Error updating user:", error);
//     return new NextResponse("Failed to update user", { status: 500 });
//   }
// };

// import User from "@/models/UserModel";
// import { connectToDB } from "@/mongodb";
// import { NextResponse } from "next/server";

// export const PATCH = async (req, { params }) => {
//   try {
//     // Connect to the database
//     await connectToDB();

//     // Extract ethereumId from the params and body data from the request
//     const { ethereumId } = params;
//     const body = await req.json();

//     console.log(ethereumId, body, "this line 🧍‍♂️🧍‍♂️🧍‍♂️");

//     // Destructure the incoming data with default values
//     const {
//       totalBalance = 0,
//       todayClaim = 0,
//       totalEarnDay = 0,
//       referEarn = 0,
//       socialLinks = [], // Default to an empty array if not provided
//       referredUsers = [], // Default to an empty array if not provided
//     } = body;

//     // Create the update object
//     const updateData = {
//       $set: {
//         totalBalance: todayClaim + totalEarnDay  // Properly calculate the total balance without `||`
//       },
//       $inc: {
//         todayClaim, // Increment by the provided `todayClaim` value
//         totalEarnDay, // Increment by the provided `totalEarnDay` value
//       },
//       // Set timer properties
//       timerStart: new Date(), // Start the timer
//       timerExpired: false, // Mark the timer as not expired
//     };

//     // Update `socialLinks` if new ones are provided without adding duplicates
//     if (socialLinks.length > 0) {
//       updateData.$addToSet = { socialLinks: { $each: socialLinks } };
//     }

//     // Find the user by ethereumId and update the document
//     const updatedUser = await User.findOneAndUpdate(
//       { ethereumId: ethereumId },
//       updateData,
//       { new: true } // Return the updated document
//     );

//     // Log the updated data for debugging
//     console.log(updatedUser, "this updated data");

//     // Return the updated user document in the response
//     return new Response(JSON.stringify(updatedUser), { status: 200 });
//   } catch (error) {
//     // Handle and log any errors during the update process
//   }
// };

import User from "@/models/UserModel";
import { connectToDB } from "@/mongodb";
import { NextResponse } from "next/server";

export const PATCH = async (req, { params }) => {
  try {
    // Connect to the database
    await connectToDB();

    // Extract ethereumId from the params and body data from the request
    const { ethereumId } = params;
    const body = await req.json();

    console.log(body)

    // Destructure incoming data
    const {
      todayClaim = 0,
      totalEarnDay = 0,
      socialLinks = [],
      timerStart = null,
      timerExpired = true,
    } = body;

    // Find the user by ethereumId
    const user = await User.findOne({ ethereumId });
    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    // Check if 24 hours have passed since the last timerStart
    const currentTime = new Date();
    const previousTimerStart = new Date(user.timerStart);
    const timeDifference = currentTime - previousTimerStart;
    const hoursPassed = timeDifference / (1000 * 60 * 60);

    // if (hoursPassed < 24) {
    //   return new NextResponse("You cannot claim again before 24 hours", {
    //     status: 403,
    //   });
    // }

    // Prepare update data
    
    const updateData = {
      $set: {
        totalBalance: user.totalBalance + todayClaim + totalEarnDay, // Update total balance
        timerStart: timerStart || new Date(), // Restart the timer (use current time if not provided)
        timerExpired: false, // Reset timerExpired to false
      },
      $inc: {
        todayClaim: todayClaim, // Increment today's claim by the provided value
        totalEarnDay: totalEarnDay, // Increment total earnings for the day by the provided value
      },
    };


    console.log(updateData,todayClaim,totalEarnDay,"THIS FROM UPDATE ROUTE 🖼️🖼️🖼️")

    // Update socialLinks if provided
    if (socialLinks.length > 0) {
      updateData.$addToSet = { socialLinks: { $each: socialLinks } }; // Add new social links
    }

    // Update the user document
    const updatedUser = await User.findOneAndUpdate(
      { ethereumId },
      updateData,
      { new: true }
    );

    // Log the updated user data
    console.log(updatedUser, "This from UPDATE USER DATA");

    // Return updated user data
    return new Response(JSON.stringify(updatedUser), { status: 200 });
  } catch (error) {
    // Handle and log any errors
    console.error("Error updating user:", error);
    return new NextResponse("Failed to update user", { status: 500 });
  }
};
