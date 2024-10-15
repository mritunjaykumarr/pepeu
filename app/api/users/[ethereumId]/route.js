import User from "@/models/UserModel";
import { connectToDB } from "@/mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const { ethereumId } = params;

    // const ethereumId = "0x4610602c2c5e51a043ec74ecdfc1123b8aac9ffr";

    const user = await User.findOne({ ethereumId: ethereumId });
    console.log(ethereumId, user);

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to get all user");
  }
};
