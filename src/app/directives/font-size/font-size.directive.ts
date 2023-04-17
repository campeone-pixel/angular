import { SimpleChanges } from '@angular/core';
import {
  Directive,
  ElementRef,
  Renderer2,
  Input,
  OnChanges,
} from '@angular/core';

@Directive({
  selector: '[appFontSize]',
})
export class FontSizeDirective implements OnChanges {
  @Input()
  size: number = 50;

  constructor(private elemento: ElementRef, private renderer: Renderer2) {
    this.establecerTamanio()
  }

  ngOnChanges(changes:SimpleChanges):void {
    console.log(changes)
    this.establecerTamanio();
  }

  establecerTamanio():void {
    this.renderer.setStyle(
      this.elemento.nativeElement,
      'font-size',
      `${this.size}px`
    );
  }
}
