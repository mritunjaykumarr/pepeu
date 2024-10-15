import User from "@/models/UserModel";
import { connectToDB } from "@/mongodb/index";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    // Connect to the database
    await connectToDB();

    // Parse the incoming JSON data
    const body = await req.json();
    if (!body) {
      return NextResponse.json(
        { error: "Request body is required" },
        { status: 400 }
      );
    }

    const { ethereumId, referralCode } = body;

    // Check if ethereumId is provided
    if (!ethereumId) {
      return NextResponse.json(
        { error: "Ethereum ID is required" },
        { status: 400 }
      );
    }

    // Convert ethereumId to lowercase to avoid case-sensitivity issues
    const normalizedEthereumId = ethereumId.toLowerCase();

    // Check if the user already exists by querying the normalized ethereumId
    const existingUser = await User.findOne({
      ethereumId: normalizedEthereumId,
    });

    if (existingUser) {
      // Return 409 status code if user already exists
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 } // Conflict status code for "already exists"
      );
    }

    // Create a new user with the normalized ethereumId and referralCode (if provided)
    const newUser = await User.create({
      ethereumId: normalizedEthereumId, // Store lowercase ethereumId
      referralCode, // Optional referral code
    });

    console.log("New user created:", newUser);

    // Return the newly created user with a 201 Created status
    return NextResponse.json(newUser, { status: 201 });
  } catch (err) {
    // Log the error and return a 500 status code if something goes wrong
    console.error("Error creating user:", err);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
};
