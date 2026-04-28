const express = require("express");
const cors = require("cors");

const materiaRoutes = require("./routes/materia.routes");
const academicRoutes = require("./routes/academic.routes");
const inscripcionRoutes = require("./routes/inscripcion.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/materias", materiaRoutes);
app.use("/academic", academicRoutes);
app.use("/inscripciones", inscripcionRoutes);
app.use("/dashboard", require("./routes/dashboard.routes"));

module.exports = app;