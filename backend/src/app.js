const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const port = process.env.PORT;
const userRouter = require("./routers/user");
require("./db/db");

const app = express();
app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use("/api", userRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
