import { Component, OnDestroy, OnInit } from '@angular/core';


import { FormControl, FormGroup, Validators } from '@angular/forms';


import { Subject, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import { InscripcionesActions } from '../../store/inscripciones.actions';
import { CreateInscripcionData } from '../../models';
import { DialogRef } from '@angular/cdk/dialog';
import { Alumnos } from 'src/app/core/models';
import { Cursos } from 'src/app/core/models/cursos.model';
import { AlumnosService } from 'src/app/core/services/alumnos.service';
import { CursosService } from 'src/app/core/services/cursos.service';

@Component({
  selector: 'app-inscripcion-dialog',
  templateUrl: './inscripcion-dialog.component.html',
  styleUrls: ['./inscripcion-dialog.component.scss'],
})
export class InscripcionDialogComponent implements OnInit, OnDestroy {
  alumnos: Alumnos[] = [];
  cursos: Cursos[] = [];

  selectedCourseControl = new FormControl<Cursos | null>(null);

  studentIdControl = new FormControl<number | null>(null, [
    Validators.required,
  ]);

  courseIdControl = new FormControl<number | null>(null, [Validators.required]);

  incripcionForm = new FormGroup({
  
    alumnosId: this.studentIdControl,
    cursosId: this.courseIdControl,
  });

  destroyed$ = new Subject<void>();

  constructor(
    private alumnosService: AlumnosService,
    private cursosService: CursosService,
    private dialogRef: DialogRef<InscripcionDialogComponent>,
    private store: Store
  ) {
    this.selectedCourseControl.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        next: (curso) => {
          if (curso) {
            
            this.courseIdControl.setValue(curso.id);
          }
        },
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  ngOnInit(): void {
    this.cursosService.getCursos().subscribe({
      next: (res) => {
        this.cursos = res;
      },
    });
    this.alumnosService.getAlumnos().subscribe({
      next: (res) => {
        this.alumnos = res;
      },
    });
  }

  onSave(): void {
    this.store.dispatch(
      InscripcionesActions.createInscripcion({
        data: this.incripcionForm.value as CreateInscripcionData,
      })
    );

    this.dialogRef.close();
  }
}
