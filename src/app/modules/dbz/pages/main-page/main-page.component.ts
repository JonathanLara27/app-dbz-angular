import { Component } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  constructor(private dbzService: DbzService) {
  }
  get personajes(): Personaje[] {
    return [...this.dbzService.personajes];
  }
  public agregarNuevoPersonaje(personaje: Personaje): void {
    this.dbzService.agregarPersonaje(personaje);
  }
  public eliminarPersonaje(id: string): void {
    this.dbzService.eliminarPersonaje(id);
  }
}
