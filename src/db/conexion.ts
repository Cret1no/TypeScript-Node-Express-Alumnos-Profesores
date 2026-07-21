import { DataSource } from 'typeorm';
import { Estudiante } from '../models/estudiantesModel';
import { Profesor } from '../models/profesoresModel';
import { Curso } from '../models/cursosModel';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'e32917148',
  database: 'cursos_v2',
  logging: true,
  entities: [Estudiante, Profesor, Curso],
  synchronize: false,
});
