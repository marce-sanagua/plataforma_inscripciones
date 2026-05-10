const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/usuarios.json");

function getUsuarios() {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function login(email, password) {
  const usuarios = getUsuarios();
  return usuarios.find(u => u.email === email && u.password === password) || null;
}

function register(nombre, email, password, rol) {
  const usuarios = getUsuarios();
  const nuevo = { id: usuarios.length + 1, nombre, email, password, rol };
  usuarios.push(nuevo);
  fs.writeFileSync(filePath, JSON.stringify(usuarios, null, 2));
  return nuevo;
}

function getById(id) {
  const usuarios = getUsuarios();
  return usuarios.find(u => u.id == id) || null;
}

module.exports = { login, register, getById };