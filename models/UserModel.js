import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    ethereumId: {
      type: String,
      unique: true,
      required: true,
    },
    totalBalance: {
      type: Number,
      default: 0,
      min: [0, "Balance cannot be negative"],
    },
    referralCode: {
      type: String,
      required: true,
      unique: true,
    },
    todayClaim: {
      type: Number,
      default: 0,
    },
    totalEarnDay: {
      type: Number,
      default: 0,
    },
    referEarn: { type: Number, default: 0},
    referredUsers: [
      {
        ethereumId: { type: String, unique: true },
        status: { type: String },
        referTime: { type: Date, default: new Date() },
      },
    ],
    socialLinks: {
      type: [String],
      validate: {
        validator: function (arr) {
          return arr.length === new Set(arr).size;
        },
        message: "socialLinks array contains duplicate values",
      },
    },
    timerStart: { type: Date },
    timerExpired: { type: Boolean, default: false },
    timerStart: {
      type: Date,
    },
  },
  {
    timestamps: true, // This will automatically add createdAt and updatedAt fields
  }
);

// const User = mongoose.model("User", userSchema, "User");
const User = mongoose.models.User || mongoose.model("User", userSchema, "User");

// console.log({ ...User });

export default User;
