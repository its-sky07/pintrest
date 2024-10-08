import mongoose from "mongoose";

const commentschema = new mongoose.Schema({

    text: {
        type: String,
        required: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }


}, { timestamps: true }
)
export const Comment = mongoose.model("Comment", commentschema);
