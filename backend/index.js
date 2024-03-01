const express = require("express");
const cors = require("cors");
const { readdirSync } = require("fs");
const { db } = require("./db");
const router = require("./routes/transactions");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use(cors());

//routes
readdirSync("./routes").map((route) =>
  app.use("/api/v1", require("./routes/" + route))
);
const server = () => {
  db();
  app.listen(PORT, () => {
    console.log("listening on :", PORT);
  });
};

server();
