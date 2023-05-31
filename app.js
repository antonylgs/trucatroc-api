const express = require("express");
require("./db");
const apiRouter = require("./api");

const app = express();

app.use(express.json());

app.use("/", apiRouter);

const port = 3001;

app.listen(port, () => {
  console.log(`API server started on port ${port}`);
});
