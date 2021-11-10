import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 10000
    }
  ]

  nuevo: Personaje = {
    nombre: 'Bulma',
    poder: 100
  }

  // cambiarNombre(event: any) {
  //   console.log(event.target.value);
  // }

}
