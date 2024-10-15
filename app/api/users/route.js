import User from "@/models/UserModel";
import { connectToDB } from "@/mongodb/index";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    await connectToDB();
    // console.log(User.find());
    const allUsers = await User.find();
    console.log(allUsers);

    return NextResponse.json(allUsers); // Use NextResponse to format the response
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to get all users" },
      { status: 500 }
    );
  }
};
