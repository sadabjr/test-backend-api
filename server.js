const express = require("express");
const connectDb = require("./db/connect");
require("dotenv").config();
const cors = require("cors");

const app = express();

connectDb();

// Using Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/api/blogs", require("./routes/blogRoutes"));

app.get("/", (req, res) => {
  res.json({ message: "API" });
});

app.listen(process.env.PORT || 8000, () => {
  console.log("Server is Running");
});
