import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

import { Alumnos, User } from 'src/app/core/models';
import { AlumnosService } from 'src/app/core/services/alumnos.service';
import { NotificationsService } from 'src/app/core/services/notifications.service';
import { AgregarComponent } from '../alumnos/abm/agregar/agregar.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { CursosService } from 'src/app/core/services/cursos.service';
import { Cursos } from 'src/app/core/models/cursos.models';

@Component({
  selector: 'app-registro-cursos',
  templateUrl: './registro-cursos.component.html',
  styles: [],
})
export class RegistroCursosComponent {
  registroForm: FormGroup;
  cursos: Cursos[] = [];
  currentUser: User | null = null;
  isAdmin: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private cursosService: CursosService,
    private authService: AuthService,
    private alumnosService: AlumnosService,
    private notification: NotificationsService
  ) {
    this.registroForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      mail: ['', Validators.required],
      cursoId: [''],
    });

    this.authService.getUser().subscribe((user) => {
      this.currentUser = user;
    });

    this.authService.esAdmin().subscribe((admin) => {
      this.isAdmin = admin;
    });
  }

  ngOnInit(): void {
    this.cargarCursos();
    if (this.currentUser) {
      this.registroForm.get('mail')?.setValue(this.currentUser.mail);
      this.registroForm.get('mail')?.disable();
    }
  }

  cargarCursos(): void {
    this.cursosService.getCursos().subscribe((cursos) => {
      this.cursos = cursos;
    });
  }

  registrar(): void {
    if (this.isAdmin) {
      if (this.registroForm.valid) {
        const nuevoAlumno: Alumnos = {
          nombre: this.registroForm.value.nombre,
          apellido: this.registroForm.value.apellido,
          mail: this.registroForm.value.mail,
        };
        this.alumnosService.add(nuevoAlumno);

        this.notification.mostrarMensaje('el usuario se creo correctamente');
      } else {
        alert('no es valido');
      }
    } else {
      if (this.registroForm.valid) {
        const nuevoAlumno: Alumnos = {
          nombre: this.registroForm.value.nombre,
          apellido: this.registroForm.value.apellido,
          mail: this.registroForm.value.mail,
        };
        this.alumnosService.add(nuevoAlumno);

        this.notification.mostrarMensaje('el usuario se creo correctamente');
      } else {
        alert('no es valido');
      }
    }
  }
}
