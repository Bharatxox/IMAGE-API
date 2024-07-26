const express = require("express");
const imageRoutes = require("./router/image");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("DB connection established"))
  .catch((err) => console.log("error connecting to file server", err));

app.use(express.json());

app.use("/app/v1/image", imageRoutes);

const port = 10000;

app.listen(port, () => {
  console.log("listening on port at " + port);
});
