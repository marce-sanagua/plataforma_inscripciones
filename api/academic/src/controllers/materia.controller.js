const materiaService = require("../services/materia.service");

async function createMateria(req, res) {
  const { nombre, horario, profesor_id } = req.body;

  try {
    await materiaService.createMateria(nombre, horario, profesor_id);
    res.json({ message: "Materia creada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getMaterias(req, res) {
  try {
    const materias = await materiaService.getMaterias();
    res.json(materias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createMateria,
  getMaterias
};