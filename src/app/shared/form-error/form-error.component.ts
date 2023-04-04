import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styles: [
  ]
})
export class FormErrorComponent {
@Input()
typeError:ValidationErrors | null = null;


}
