// this file is used to create the post model
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  pictures: [{ type: String }], // array of urls to pictures
  opened: { type: Boolean, default: true }, // if the post is still available
  userId: { type: String, required: true },
  offersId: [{ type: String }], // the offers made on the post
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
