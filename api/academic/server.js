const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

const inscripciones = [
  { userId: 1, materia: "Algoritmos" },
  { userId: 1, materia: "BD" }
];

app.get("/academic/usuario/:id", async (req, res) => {
  const userId = req.params.id;

  const user = await axios.get(
    `http://localhost:3000/users/alumno/${userId}`
  );

  const materias = inscripciones.filter(i => i.userId == userId);

  res.json({
    usuario: user.data,
    materias
  });
});

app.listen(4000, () => console.log("academic - feature inscripciones en 4000"));