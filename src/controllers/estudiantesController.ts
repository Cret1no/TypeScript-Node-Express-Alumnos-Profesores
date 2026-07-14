import { Request, Response } from 'express';

class EstudiantesController {
  constructor() {}

  consultar(req: Request, res: Response) {
    try {
      res.send('consulta por estudiantes');
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  consultarDetalle(req: Request, res: Response) {
    try {
      res.send('consulta detalle');
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  ingresar(req: Request, res: Response) {
    try {
      res.send('ingreso');
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  actualizar(req: Request, res: Response) {
    try {
      res.send('actualizacion');
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  borrar(req: Request, res: Response) {
    try {
      res.send('borrado');
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }
}

export default new EstudiantesController();
