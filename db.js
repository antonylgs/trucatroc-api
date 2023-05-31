const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.DB_URL, {
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
