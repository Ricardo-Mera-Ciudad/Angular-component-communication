import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ServiceButton } from 'src/app/services/service-button.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  
  public nombre: string = ''
  public childName:string = this.nombre;
  public parentService: string = 'Parent service';

  constructor( public serviceButton: ServiceButton) {}

  cambiarNombre(){
    
    this.childName = 'Parent Input';
    this.nombre = '';
    this.serviceButton.nombreHijo = '';
    
  }
  
  cambiarNombreService () {
    
    this.serviceButton.nombreHijo = this.parentService;
    this.serviceButton.nombrePadre = '';
    this.nombre = '';

  }

  
}
