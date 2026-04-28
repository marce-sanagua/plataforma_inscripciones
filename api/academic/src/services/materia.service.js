const db = require("../config/db");

async function createMateria(nombre, horario, profesor_id) {
  const nombreNormalizado = nombre.trim().toLowerCase();

  const [existing] = await db.query(
    "SELECT * FROM materias WHERE LOWER(nombre) = ?",
    [nombreNormalizado]
  );

  if (existing.length > 0) {
    throw new Error("La materia ya existe");
  }

  return await db.query(
    "INSERT INTO materias (nombre, horario, profesor_id) VALUES (?, ?, ?)",
    [nombreNormalizado, horario, profesor_id]
  );
}


async function getMaterias() {
  const [rows] = await db.query("SELECT * FROM materias");
  return rows;
}

async function getMateriasByProfesor(profesor_id) {
  const [materias] = await db.query(
    "SELECT * FROM materias WHERE profesor_id = ?",
    [profesor_id]
  );

  for (let materia of materias) {
   const [alumnos] = await db.query(
  `SELECT user_id
   FROM inscripciones
   WHERE materia_id = ?`,
  [materia.id]
);

    materia.alumnos = alumnos;
  }

  return materias;
}

module.exports = {
  createMateria,
  getMaterias,
  getMateriasByProfesor
};