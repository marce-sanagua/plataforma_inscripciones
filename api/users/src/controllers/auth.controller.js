const userService = require("../services/user.service");

async function login(req, res) {
  const { email, password } = req.body;

  const user = await userService.login(email, password);

  if (!user) {
    return res.status(401).json({ error: "Credenciales incorrectas" });
  }

  res.json({
    id: user.id,
    nombre: user.nombre,
    rol: user.rol
  });
}

async function register(req, res) {
  const { nombre, email, password, rol } = req.body;

  try {
    await userService.register(nombre, email, password, rol);

    res.json({ message: "Usuario registrado correctamente" });
  } catch (error) {
    console.log("ERROR REAL:", error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  login,
  register
};