export class Cursos {
  constructor(
    public id: number,
    public nombre: string,
    public fecha_inicio: Date,
    public fecha_fin: Date
  ) {}
}

export interface CrearCursoPayload {
  nombre: string;
  fecha_inicio: Date;
  fecha_fin: Date;
}
