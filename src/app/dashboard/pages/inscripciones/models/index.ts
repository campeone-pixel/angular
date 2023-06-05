import { Alumnos } from "src/app/core/models";
import { Cursos } from "src/app/core/models/cursos.model";



export interface Inscripcion {
  id: number;
  alumnosId: number;
  cursosId: number;
 
}

export interface InscripcionWithStudent extends Inscripcion {
  alumnos: Alumnos;
}



export interface InscripcionWithCourse extends Inscripcion {
  cursos: Cursos;
}

export interface CreateInscripcionData {
  alumnosId: number;
  cursosId: number;
 
}

export type InscripcionWithAll = InscripcionWithStudent & InscripcionWithCourse;
