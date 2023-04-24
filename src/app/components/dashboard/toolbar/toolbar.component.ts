import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SidenavTogglerService } from 'src/app/core/services/sidenav-toggler.service';

import { User } from 'src/app/core/models';

import { AuthService } from 'src/app/core/services/auth.service';
import { enviroments } from 'src/enviroments/enviroments.prod';
// import { LoginComponent } from '../../pages/login/login.component';
// import { RegisterComponent } from '../../pages/register/register.component';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styles: [],
})
export class ToolbarComponent implements OnInit {
  isProd = enviroments.isProduction;
  userAuth:User|null = null

  constructor(
    private sidenavTogglerService: SidenavTogglerService,
    public dialog: MatDialog,
    public authService:AuthService
  ) {}

  ngOnInit(): void {
    // this.updateUserAuth()
  }

  clickMenu() {
    this.sidenavTogglerService.toggle();
  }

  // openLoginDialog() {
  //   const dialogRef = this.dialog.open(LoginComponent, {
  //     disableClose: true,
  //   });
  // }

  // openRegisterDialog(){
  //   const dialogRef = this.dialog.open(RegisterComponent, {
  //     disableClose: true,
  //   });
  // }

  // updateUserAuth(){
  //  this.authService
  //   .obtenerUsuarioAutenticado()
  //   .subscribe((user) => (this.userAuth = user));
  // }

  // logout() {
  
  //   this.authService.logout()
  //   this.userAuth = null
  
  // }

}
