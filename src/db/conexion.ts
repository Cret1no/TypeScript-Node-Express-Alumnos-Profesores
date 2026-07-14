import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'e32917148',
  database: 'cursos',
  logging: true,
  entities: [],
});
