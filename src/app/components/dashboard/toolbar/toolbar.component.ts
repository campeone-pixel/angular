import { Component } from '@angular/core';
import { SidenavTogglerService } from '../../../services/sidenav-toggler.service';
import { enviroments } from 'src/enviroments/enviroments.prod';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styles: [
  ]
})
export class ToolbarComponent {

  isProd = enviroments.isProduction

  constructor(private sidenavTogglerService: SidenavTogglerService) {

  }

  clickMenu() { 
    this.sidenavTogglerService.toggle();
  }
}
