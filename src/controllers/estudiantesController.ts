import { Request, Response } from 'express';
import { Estudiante } from '../models/estudiantesModel';

class EstudiantesController {
  constructor() {}

  async consultar(req: Request, res: Response) {
    try {
      const data = await Estudiante.find();
      res.status(200).json(data);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ message: err.message });
      }
    }
  }

  async consultarDetalle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const registro = await Estudiante.findOneBy({ id: Number(id) });

      if (!registro) {
        throw new Error('estudiante no encontrado');
      }
      res.status(200).json(registro);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ message: err.message });
      }
    }
  }

  async ingresar(req: Request, res: Response) {
    try {
      const { dni, nombre, apellido, email } = req.body;

      if (!dni || !nombre || !apellido || !email) {
        return res.status(400).json({ message: 'Faltan datos obligatorios' });
      }
      const registro = await Estudiante.save({ ...req.body });
      res.status(201).json(registro);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ message: err.message });
      }
    }
  }

  async actualizar(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const registro = await Estudiante.findOneBy({ id: Number(id) });
      if (!registro) {
        throw new Error('Estudiante no encontrado');
      }
      await Estudiante.update({ id: Number(id) }, req.body);
      const registroActualizado = await Estudiante.findOneBy({
        id: Number(id),
      });
      res.status(200).json(registroActualizado);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ message: err.message });
      }
    }
  }

  async borrar(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const registro = await Estudiante.findOneBy({ id: Number(id) });
      if (!registro) {
        throw new Error('Estudiante no encontrado');
      }
      await Estudiante.delete({ id: Number(id) });
      res.status(204);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ message: err.message });
      }
    }
  }
}

export default new EstudiantesController();
