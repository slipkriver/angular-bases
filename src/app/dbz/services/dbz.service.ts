import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 10000
        }
      ];

      get personajes(): Personaje[] {
          return [...this._personajes];
      }

    constructor() {
        // console.log('Servicio Inicializado...');
    }

/* Agrega un nuevo personaje al array */
    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);
        console.log(this._personajes);
    }
}