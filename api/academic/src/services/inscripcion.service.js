const db = require("../config/db");

// 🟦 CREAR INSCRIPCIÓN
async function createInscripcion(user_id, materia_id) {
  // 🔒 asegurar tipo numérico
  user_id = Number(user_id);
  materia_id = Number(materia_id);

  // 🔍 validar duplicado
  const [rows] = await db.query(
    "SELECT COUNT(*) as total FROM inscripciones WHERE user_id = ? AND materia_id = ?",
    [user_id, materia_id]
  );

  if (rows[0].total > 0) {
    throw new Error("Ya estás inscripto en esta materia");
  }

  // 🟢 insertar
  const result = await db.query(
    "INSERT INTO inscripciones (user_id, materia_id) VALUES (?, ?)",
    [user_id, materia_id]
  );

  return result;
}

// 🟦 OBTENER INSCRIPCIONES POR USUARIO
async function getByUser(user_id) {
  user_id = Number(user_id);

  const [rows] = await db.query(
    `SELECT 
        i.id,
        m.nombre,
        m.horario
     FROM inscripciones i
     JOIN materias m ON i.materia_id = m.id
     WHERE i.user_id = ?`,
    [user_id]
  );

  return rows;
}

module.exports = {
  createInscripcion,
  getByUser
};