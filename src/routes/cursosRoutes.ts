const express = require('express');
const router = express.Router();
const {
  consultar,
  ingresar,
  consultarDetalle,
  actualizar,
  borrar,
  asociarEstudiante,
} = require('../controllers/cursosController.js');

router.get('/', consultar);

router.post('/', ingresar);
router.post('/registrarEstudiante', asociarEstudiante);

router.route('/:id').get(consultarDetalle).put(actualizar).delete(borrar);

module.exports = router;
