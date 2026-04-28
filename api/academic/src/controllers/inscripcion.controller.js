const service = require("../services/inscripcion.service");

// 🟦 CREAR INSCRIPCIÓN
async function createInscripcion(req, res) {
  const { user_id, materia_id } = req.body;

  try {
    await service.createInscripcion(user_id, materia_id);

    res.json({ message: "Inscripción creada correctamente" });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


// 🟦 OBTENER MATERIAS DE UN USUARIO
async function getByUser(req, res) {
  try {
    const { id } = req.params;

    const data = await service.getByUser(id);

    // 🟢 si no tiene materias
    if (data.length === 0) {
      return res.json({
        message: "No estás inscripto en ninguna materia",
        materias: []
      });
    }

    // 🟢 si tiene materias
    res.json({
      materias: data
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createInscripcion,
  getByUser
};