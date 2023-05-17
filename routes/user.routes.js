const { Router } = require("express");
const router = Router();

const {
  registrarUsuario,
  iniciarSesion,
  obtenerTodos,
} = require("../controllers/user.controller");

router.route("/").post(registrarUsuario).get(obtenerTodos);
router.route("/iniciar/sesion").post(iniciarSesion);

module.exports = router;
