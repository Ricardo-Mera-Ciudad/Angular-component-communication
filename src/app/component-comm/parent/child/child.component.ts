import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServiceButton } from 'src/app/services/service-button.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() recibirNombre: string = '';

  @Output() outputHijo = new EventEmitter<string>();

  outputName: string = 'Child output';

  constructor( public serviceButton : ServiceButton ) {

  }

  emitHijo() {
    this.outputHijo.emit(this.outputName);
    this.recibirNombre = '';
    this.serviceButton.nombreHijo = '';
  }

  childService(){
    this.serviceButton.nombrePadre = 'Child Service';
    this.serviceButton.nombreHijo = '';
  }
}
