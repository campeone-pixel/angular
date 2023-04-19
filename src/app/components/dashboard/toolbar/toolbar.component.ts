import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SidenavTogglerService } from 'src/app/core/services/sidenav-toggler.service';
import { LoginComponent } from 'src/app/shared/dialogs/mis_dialogs/login/login.component';

import { enviroments } from 'src/enviroments/enviroments.prod';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styles: [],
})
export class ToolbarComponent {
  isProd = enviroments.isProduction;

  constructor(
    private sidenavTogglerService: SidenavTogglerService,
    public dialog: MatDialog
  ) {}

  clickMenu() {
    this.sidenavTogglerService.toggle();
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {
      disableClose: true,
    });
  }
}
