const express = require("express");
const cors = require("cors");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const getInscripciones = () => {
  const filePath = path.join(__dirname, "src/data/inscripciones.json");
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
};

app.get("/academic/usuario/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const userResponse = await axios.get(
      `https://users-api-rmm5.onrender.com/usuarios/${userId}`

    );

    const materias = getInscripciones().filter(i => i.userId == userId);

    return res.json({
      usuario: userResponse.data,
      materias
    });

  } catch (error) {
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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
