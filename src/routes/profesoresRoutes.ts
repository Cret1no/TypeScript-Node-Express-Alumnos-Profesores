const express = require('express');
const router = express.Router();
const {
  consultar,
  ingresar,
  consultarDetalle,
  actualizar,
  borrar,
} = require('../controllers/profesoresController.js');

router.get('/', consultar);

router.post('/', ingresar);

router.route('/:id').get(consultarDetalle).put(actualizar).delete(borrar);

module.exports = router;
