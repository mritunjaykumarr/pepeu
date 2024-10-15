import User from "@/models/UserModel";
import { connectToDB } from "@/mongodb";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "metamask",
      credentials: {
        address: { type: "text" },
      },
      async authorize(credentials, req) {
        // console.log(credentials, "⛔⛔⛔");
        if (!credentials || !credentials.address) {
          throw new Error("Invalid address");
        }

        // Ensure the database connection is established
        await connectToDB();

        // Fetch the user from MongoDB using the Ethereum address
        const user = await User.findOne({
          ethereumId: credentials.address.toLowerCase(),
        });

        console.log(user, "🚀🚀🚀🚀");

        if (!user) {
          throw new Error("Invalid user");
        }

        // Return user object with Ethereum ID for the session
        return {
          id: user._id.toString(),
          ethereumId: user.ethereumId,
          name: user.name, // Assuming user has a name field
          email: null, // No email for wallet-based auth
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async session({ session, token }) {
      // console.log(session, token, "⭐⭐⭐");

      // Find the MongoDB user based on Ethereum ID from the session
      const mongodbUser = await User.findOne({
        ethereumId: token.ethereumId, // Use token.ethereumId, assuming it's set in the JWT
      });

      // console.log(mongodbUser, "🤢🤢🤢");

      // Ensure the session is correctly populated with MongoDB user data
      session.user.id = mongodbUser._id.toString();
      session.user = { ...session.user, ...mongodbUser._doc }; // Merge user data from MongoDB

      return session; // Return the updated session object
    },

    async jwt({ token, user }) {
      // Attach Ethereum ID to the JWT token when user logs in
      if (user) {
        token.ethereumId = user.ethereumId;
      }
      return token;
    },
  },
});

export { handler as GET, handler as POST };
