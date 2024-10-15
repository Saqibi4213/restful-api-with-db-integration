const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const app = express();
const port = 3000;

connectDB();

app.use(express.json());
app.use("/users", userRoutes);

app.get("/", (_req, res) => {
  res.send("Welcome to the RESTful API!!!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
