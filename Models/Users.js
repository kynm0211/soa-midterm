import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        userName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        fullName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        password: {
            type: String,
            required: true,
            min: 5,
        },
        role: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
