const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors({
  origin: ['http://localhost:3000', 'https://plataforma-inscripciones-frontend.vercel.app']
}));
app.use(express.json());

const getUsuarios = () => {
  const filePath = path.join(__dirname, "src/data/usuarios.json");
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
};


app.get("/usuarios", (req, res) => {
  res.status(200).json(getUsuarios());
});


app.get("/usuarios/:id", (req, res) => {
  const usuario = getUsuarios().find(u => u.id == req.params.id);

  if (!usuario) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }

  res.status(200).json(usuario);
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("users corriendo en puerto", PORT);
});
