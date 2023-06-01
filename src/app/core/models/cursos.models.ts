import { User } from "./user.model";

export interface Cursos {
  id?: number;
  nombre: string;
  fecha_inicio: Date;
  fecha_fin: Date;
  diasCursar: string;
  horario: string;
}

