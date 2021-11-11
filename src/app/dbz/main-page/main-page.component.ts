import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {



  nuevo: Personaje = {
    nombre: 'Bulma',
    poder: 100
  }

  // agregarNuevoPersonaje(personaje: Personaje){
    // debugger;
    // this.personajes.push(personaje);
    // console.log(this.personajes);
  // }

  // cambiarNombre(event: any) {
  //   console.log(event.target.value);
  // }

}
