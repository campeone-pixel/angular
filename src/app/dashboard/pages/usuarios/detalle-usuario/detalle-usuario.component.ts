import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { UsuariosService } from 'src/app/core/services/usuarios.service';
import { User } from 'src/app/core/models';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styles: [],
})
export class DetalleUsuarioComponent {
  detalleUsuario: User | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UsuariosService
  ) {
    this.userService.obtenerUsuarioPorID(
      parseInt(this.activatedRoute.snapshot.params['id'])
    ).subscribe(
      (usuario)=>{
        this.detalleUsuario = usuario
      }
    );
  }
}
