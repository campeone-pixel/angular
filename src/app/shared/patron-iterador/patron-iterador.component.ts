import { Component, OnInit } from '@angular/core';
import { iterableList } from 'src/app/core/classes';

@Component({
  selector: 'app-patron-iterador',
  templateUrl: './patron-iterador.component.html',
  styles: [
  ]
})
export class PatronIteradorComponent implements OnInit {



  ngOnInit(): void {
    const list = new iterableList("manzana", "naranja", 'pera')

    




  }

}
