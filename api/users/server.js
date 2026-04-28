const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require("./src/routes/auth.routes");
app.use("/auth", authRoutes);

app.get("/", (req, res) => res.json({ message: "Users service funcionando" }));

app.listen(3000, () => {
  console.log("Users service en puerto 3000");
});
