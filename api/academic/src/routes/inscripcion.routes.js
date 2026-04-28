const express = require("express");
const router = express.Router();

const controller = require("../controllers/inscripcion.controller");

router.post("/", controller.createInscripcion);
router.get("/usuario/:id", controller.getByUser);

module.exports = router;