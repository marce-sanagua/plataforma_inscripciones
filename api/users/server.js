const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
const authRoutes = require("./src/routes/auth.routes");
app.use("/", authRoutes);

app.listen(3000, () => {
  console.log("Users service en puerto 3000");
});