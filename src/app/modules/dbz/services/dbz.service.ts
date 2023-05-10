import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

import { v4 as uuid } from 'uuid'

@Injectable({ providedIn: 'root' })
export class DbzService {
    constructor() { }
    public personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000,
            id: uuid()
        },
        {
            nombre: 'Vegeta',
            poder: 7500,
            id: uuid()
        },
        {
            nombre: 'Frezzer',
            poder: 14500,
            id: uuid()
        }
    ];
    agregarPersonaje(personajenuevo: Personaje): void {
        this.personajes.push({ ...personajenuevo, id: uuid() });
    }
    eliminarPersonaje(id: string): void {
        this.personajes = this.personajes.filter((personajeItem: Personaje) => personajeItem.id !== id);
    }
}