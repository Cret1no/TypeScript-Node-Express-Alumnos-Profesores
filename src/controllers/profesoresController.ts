import { Request, Response } from 'express';
import { Profesor } from '../models/profesoresModel';

class ProfesoresController {
  constructor() {}

  async consultar(req: Request, res: Response) {
    try {
      const data = await Profesor.find();
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
      const registro = await Profesor.findOneBy({ id: Number(id) });

      if (!registro) {
        throw new Error('Profesor no encontrado');
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
      const { dni, nombre, apellido, email, profesion, telefono } = req.body;

      if (!dni || !nombre || !apellido || !email || !profesion || !telefono) {
        return res.status(400).json({ message: 'Faltan datos obligatorios' });
      }
      const registro = await Profesor.save({ ...req.body });
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
      const registro = await Profesor.findOneBy({ id: Number(id) });
      if (!registro) {
        throw new Error('Profesor no encontrado');
      }
      await Profesor.update({ id: Number(id) }, req.body);
      const registroActualizado = await Profesor.findOneBy({
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
      const registro = await Profesor.findOneBy({ id: Number(id) });
      if (!registro) {
        throw new Error('Profesor no encontrado');
      }
      await Profesor.delete({ id: Number(id) });
      res.status(204);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ message: err.message });
      }
    }
  }
}

export default new ProfesoresController();
