import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Profesor } from './profesoresModel';
import { Estudiante } from './estudiantesModel';

@Entity('cursos')
export class Curso {
  @PrimaryColumn()
  id: number;

  @Column()
  nombre: String;

  @Column('text')
  descripcion: String;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Profesor, (profesor) => profesor.cursos)
  @JoinColumn({ name: 'profesor_id' })
  profesor: Profesor;

  @ManyToMany(() => Estudiante)
  @JoinTable({
    name: 'cursos_estudiantes',
    joinColumn: { name: 'curso_id' },
    inverseJoinColumn: { name: 'estudiante_id' },
  })
  estudiantes: Estudiante[];
}
