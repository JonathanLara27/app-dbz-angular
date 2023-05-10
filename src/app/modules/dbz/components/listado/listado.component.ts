import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-dbz-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {
  @Input()
  public data: Personaje[] = [];
  public title: string = "Listado de personajes";
  @Output()
  public deleteIndex: EventEmitter<string> = new EventEmitter;
  eliminarPersonaje(id?: string): void {
    id && this.deleteIndex.emit(id);
  }
}
