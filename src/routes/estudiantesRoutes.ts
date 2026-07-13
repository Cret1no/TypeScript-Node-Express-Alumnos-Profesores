import express from 'express';
const router = express.Router();
const {
  consultar,
  ingresar,
  consultarDetalle,
  actualizar,
  borrar,
} from '../controllers/estudiantesController';

router.get('/', consultar);

router.post('/', ingresar);

router.route('/:id').get(consultarDetalle).put(actualizar).delete(borrar);

export default router;
