import { Component } from '@angular/core';
import { SidenavTogglerService } from '../../../services/sidenav-toggler.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styles: [
  ]
})
export class ToolbarComponent {

  constructor(private sidenavTogglerService: SidenavTogglerService) {

  }

  clickMenu() { 
    this.sidenavTogglerService.toggle();
  }
}
