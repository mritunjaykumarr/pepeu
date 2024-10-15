// import User from "@/models/UserModel";
// import { connectToDB } from "@/mongodb";
// import { NextResponse } from "next/server";

// export const PATCH = async (req, { params }) => {
//   try {
//     // Connect to the database
//     await connectToDB();

//     // Get the referral code from the params and ethereumId from the request body
//     const { code } = params;
//     const { ethereumId } = await req.json();

//     console.log("Received ethereumId:", ethereumId, "Referral code:", code);

//     // Find the user by referral code
//     const user = await User.findOne({ referralCode: code });

//     if (!user) {
//       return new NextResponse("User not found", { status: 404 });
//     }

//     // Check if the referred user's ethereumId matches the user's own ethereumId (self-referral check)
//     if (user.ethereumId === ethereumId) {
//       return new NextResponse("User cannot refer themselves", { status: 400 });
//     }

//     // Check if the ethereumId already exists in referredUsers array (duplicate check)
//     const isAlreadyReferred = user.referredUsers.some(
//       (referredUser) => referredUser.ethereumId === ethereumId
//     );

//     if (isAlreadyReferred) {
//       return new NextResponse("User has already been referred", {
//         status: 400,
//       });
//     }

//     // Create the update object to push the referred user details
//     const updateData = {
//       $push: {
//         referredUsers: {
//           ethereumId: ethereumId,
//           referTime: new Date(),
//           status: "Active",
//         },
//       },
//       $inc: { referEarn: 1000 },
//       $set: {
//         totalBalance: todayClaim + totalEarnDay + referEarn,
//       },
//     };

//     // Update the user in the database and push to referredUsers array
//     const updatedUser = await User.findOneAndUpdate(
//       { referralCode: code }, // Filter by referral code
//       updateData, // Update referredUsers field
//       { new: true } // Return the updated document
//     );

//     if (!updatedUser) {
//       return new NextResponse("Failed to update user", { status: 500 });
//     }

//     // Return success with updated user data
//     return NextResponse.json(
//       { success: true, data: updatedUser },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Error updating referred user:", error);
//     return new NextResponse("Failed to update user", { status: 500 });
//   }
// };

// import tokenGenerator from "@/app/_utlis/tokenGenerator";
// import User from "@/models/UserModel";
// import { connectToDB } from "@/mongodb";
// import { NextResponse } from "next/server";

// export const PATCH = async (req, { params }) => {
//   try {
//     // Connect to the database
//     await connectToDB();

//     // Get the referral code from the params and ethereumId from the request body
//     const { code } = params;
//     const { ethereumId } = await req.json();

//     console.log("Received ethereumId:", ethereumId, "Referral code:", code);

//     // Find the user by referral code
//     const user = await User.findOne({ referralCode: code });

//     if (!user) {
//       return new NextResponse("User not found", { status: 404 });
//     }

//     // Check if the referred user's ethereumId matches the user's own ethereumId (self-referral check)
//     if (user.ethereumId === ethereumId) {
//       return new NextResponse("User cannot refer themselves", { status: 400 });
//     }

//     // Check if the ethereumId already exists in referredUsers array (duplicate check)
//     const isAlreadyReferred = user.referredUsers.some(
//       (referredUser) => referredUser.ethereumId === ethereumId
//     );

//     if (isAlreadyReferred) {
//       return new NextResponse("User has already been referred", {
//         status: 400,
//       });
//     }

//     // Define todayClaim and totalEarnDay if they are not already defined in your context
//     const todayClaim = user.todayClaim || 0; // Ensure you define these appropriately
//     const totalEarnDay = user.totalEarnDay || 0;
//     const referEarn = user.referEarn || 0;

//     // Create the update object to push the referred user details
//     const updateData = {
//       $push: {
//         referredUsers: {
//           ethereumId: ethereumId,
//           referTime: new Date(),
//           status: "Active",
//         },
//       },
//       $inc: { referEarn: 1000 }, // Increment the referral earnings
//       $set: {
//         totalBalance: todayClaim + totalEarnDay + referEarn, // Update the total balance
//       },

//     };

//     // Update the user in the database and push to referredUsers array
//     const updatedUser = await User.findOneAndUpdate(
//       { referralCode: code }, // Filter by referral code
//       updateData, // Update referredUsers field
//       { new: true } // Return the updated document
//     );

//     if (!updatedUser) {
//       return new NextResponse("Failed to update user data", { status: 500 });
//     }
//     // last create new account with that id

//     const newUser = await User.create({
//       ethereumId:ethereumId,
//       referralCode:tokenGenerator()
//     })

//     console.log('New user created with refer Link',newUser)

//     // Return success with updated user data
//     return NextResponse.json(
//       { success: true, data: updatedUser },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Error updating referred user:", error);
//     return new NextResponse("Failed to update user due to server error", {
//       status: 500,
//     });
//   }
// };

import tokenGenerator from "@/app/_utlis/tokenGenerator";
import User from "@/models/UserModel";
import { connectToDB } from "@/mongodb";
import { NextResponse } from "next/server";

export const PATCH = async (req, { params }) => {
  try {
    // Connect to the database
    await connectToDB();

    // Get the referral code from the params and ethereumId from the request body
    const { code } = params;
    const { ethereumId, referAmount } = await req.json();

    console.log("Received ethereumId:", ethereumId, "Referral code:", code);

    // Find the user by referral code (referrer)
    const user = await User.findOne({ referralCode: code });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    // Check if the referred user's ethereumId matches the referrer’s ethereumId (self-referral check)
    if (user.ethereumId === ethereumId) {
      return new NextResponse("User cannot refer themselves", { status: 400 });
    }

    // Check if the ethereumId already exists in referredUsers array (duplicate check)
    const isAlreadyReferred = user.referredUsers.some(
      (referredUser) => referredUser.ethereumId === ethereumId
    );

    if (isAlreadyReferred) {
      return new NextResponse("User has already been referred", {
        status: 400,
      });
    }

    const updateData = {
      $push: {
        referredUsers: {
          ethereumId: ethereumId,
          referTime: new Date(),
          status: "Active",
        },
      },
      $inc: {
        referEarn: referAmount, // Increment the referral earnings
        totalBalance: referAmount, // Increment the total balance
      },
    };

    // Try to create the new referred user first
    const newUser = await User.create({
      ethereumId: ethereumId,
      referralCode: tokenGenerator(),
    });

    console.log("New user created with referral link", newUser);

    const updatedUser = await User.findOneAndUpdate(
      { referralCode: code }, // Filter by referral code
      updateData, // Update referredUsers and balance
      { new: true } // Return the updated document
    );
    // Now, update the referrer’s record to add the new referral and
    console.log(updateData, "THIS FROM REFERRED USER ⭐⭐⭐");

    // Update the referrer’s user in the database

    if (!updatedUser) {
      return new NextResponse("Failed to update referrer data", {
        status: 500,
      });
    }

    // Return success with updated referrer and new user data
    return NextResponse.json(
      { success: true, referrer: updatedUser, newUser },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error updating referred user:", error);
    return new NextResponse("Failed to update user due to server error", {
      status: 500,
    });
  }
};
