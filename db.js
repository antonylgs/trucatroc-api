const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/trucatroc", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on(
  "error",
  console.error.bind(console, "Error connecting to the MongoDB database: ")
);
db.once("open", () => {
  console.log("Connected to the MongoDB database!");
});
