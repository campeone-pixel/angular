import { Component, OnChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SidenavTogglerService } from 'src/app/core/services/sidenav-toggler.service';

import { User } from 'src/app/core/models';

import { AuthService } from 'src/app/core/services/auth.service';
import { enviroments } from 'src/enviroments/enviroments.prod';

import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styles: [],
})
export class ToolbarComponent implements OnInit {
  isProd = enviroments.isProduction;
  userAuth: User | null = null;

  constructor(
    private sidenavTogglerService: SidenavTogglerService,
    public dialog: MatDialog,
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.getUser().subscribe((user) => (this.userAuth = user));
  }

  clickMenu() {
    this.sidenavTogglerService.toggle();
  }

  openLogin() {
    this.router.navigate(['auth', 'login']);
  }

  openRegister() {
    this.router.navigate(['auth', 'register']);
  }

  updateUserAuth() {
    this.authService.getUser().subscribe((user) => (this.userAuth = user));
  }

  logout() {
    this.authService.logout();
    this.userAuth = null;
  }
}
