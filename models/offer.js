// this file is used to create the offer model, which are made by users on a post in order to propose a item to trade
const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  pictures: [{ type: String }], // array of urls to pictures
  opened: { type: Boolean, default: true }, // if the offer is still available
  userId: { type: Number, required: true },
  postId: { type: String }, // the post the offer is made on
});

const Offer = mongoose.model("Offer", offerSchema);

module.exports = Offer;
