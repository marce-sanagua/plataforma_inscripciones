const db = require("../config/db");

async function login(email, password) {
  const [rows] = await db.query(
    "SELECT * FROM usuarios WHERE email = ? AND password = ?",
    [email, password]
  );

  return rows[0];
}

async function register(nombre, email, password, rol) {
  const result = await db.query(
    "INSERT INTO usuarios (nombre, email, password, rol) VALUES (?, ?, ?, ?)",
    [nombre, email, password, rol]
  );

  return result;
}

async function getById(id) {
  const [rows] = await db.query(
    "SELECT id, nombre FROM usuarios WHERE id = ?",
    [id]
  );

  return rows[0];
}

module.exports = {
  login,
  register,
  getById
};