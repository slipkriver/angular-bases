import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Batman', 'Flash', 'Hulk', 'X-Men', 'Mujer Maravilla', 'Thor'];
  heroeBorrado: string = '';

  constructor() { }

  borrarHeroe() {
    this.heroeBorrado = this.heroes.pop() || '';
    // console.log(heroeBorrado);
  }

}
