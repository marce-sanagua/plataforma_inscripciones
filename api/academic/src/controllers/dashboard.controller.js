const materiaService = require("../services/materia.service");


async function dashboardProfesor(req, res) {
  try {
    const { id } = req.params;

    
    const materias = await materiaService.getMateriasByProfesor(id);
    if (materias.length === 0) {
      return res.json({
        profesor: { id },
        message: "No tenés materias asignadas"
      });
    }

    res.json({
      profesor: {id},
      materias
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  dashboardProfesor
};