const { Router } = require("express");
const router = Router();

const {obtenerFechaDisponible} = require('../controllers/fechas.controller');

router.route('/:fecha')
    .get(obtenerFechaDisponible)


module.exports = router;
