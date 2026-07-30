import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    userEmail: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    userAge: {
        type: Number,
        required: true
    }

}, {
    timestamps: true
});

export default mongoose.model("user", userSchema);