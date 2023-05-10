import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-form-agregar-personaje',
  templateUrl: './form-agregar-personaje.component.html',
  styleUrls: ['./form-agregar-personaje.component.scss']
})
export class FormAgregarPersonajeComponent {
  public title: string = 'Agregar personaje';
  @Output()
  public eventoNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  public personajenuevo: Personaje = {
    nombre: '',
    poder: 0,
  }
  agregarPersonaje(): void {
    if (this.personajenuevo.nombre.trim().length === 0 || this.personajenuevo.poder < 0) return;
    this.eventoNuevoPersonaje.emit(this.personajenuevo);
    this.personajenuevo = {
      nombre: '',
      poder: 0
    }
  }
}


