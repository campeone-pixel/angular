export class Alumnos {
  constructor(
    public id: number,
    public nombre: string,
    public apellido: string,
    public mail:string,
    public mejorAlumno: boolean,
    public eliminado: boolean,

  
  ) {}

  cambiarMejorAlumno(ev:any){
    console.log(ev)
    this.mejorAlumno = !this.mejorAlumno
  }
}

