import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {
  personas: string[] = ["Juan","Julian","Marcos","Florencia","Evelyn"];
  estaCargando:Boolean = false
  mensaje:number= 2
}
