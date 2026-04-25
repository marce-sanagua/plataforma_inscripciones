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

// ✔ ACADEMIC
app.get("/academic/usuario/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const userResponse = await axios.get(
      `https://users-api-rmm5.onrender.com/users/alumno/${userId}`
    );

    const materias = inscripciones.filter(i => i.userId == userId);

    return res.json({
      usuario: userResponse.data,
      materias
    });

  } catch (error) {
    // ✔ usuario no existe (404 de users)
    if (error.response && error.response.status === 404) {
      return res.status(404).json({
        error: "Usuario no encontrado"
      });
    }

    return res.status(500).json({
      error: "Error conectando con users-service"
    });
  }
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("academic corriendo en puerto", PORT);
});