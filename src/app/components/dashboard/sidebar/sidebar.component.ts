import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavTogglerService } from '../../../services/sidenav-toggler.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})

export class SidebarComponent  implements OnInit {
  showFiller = false;

  @ViewChild('sidenav') private sidenav?: MatSidenav;

  constructor(private sidenavTogglerService: SidenavTogglerService) { 
   
  }
  
  ngOnInit() { 
   this.sidenavTogglerService.sideNavToggleSubject.subscribe(()=> {
    
      this.sidenav?.toggle();
    });
    
  } 
}
