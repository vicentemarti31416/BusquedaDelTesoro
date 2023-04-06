import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'BusquedaDelTesoro';
  columnas: number = 0;
  filas: number = 0;
  array;
  randomColumna: number = 0;
  randomFila: number = 0;
  imgXUrl = './assets/images/x.png';

  ngOnInit(): void {
    this.columnas  = parseInt(prompt('Introduce el número de columnas'), 10);
    this.filas = parseInt(prompt('Introduce el número de filas'), 10);
    this.randomColumna = Math.round(Math.random() * (this.columnas));
    this.randomFila = Math.round(Math.random() * this.filas);
    this.createArray(this.columnas, this.filas);
  }

  public createArray(columnas: number, filas: number): void {
    this.array = new Array(filas);
    for (let i = 0; i < this.array.length; i++) {
      this.array[i] = new Array(columnas);
      this.array[i].fill(this.imgXUrl);
      console.log(this.array)
    }
  }

  public check(i: number, j: number): void {
    if (this.randomColumna === i && this.randomFila === j) {
      this.array[i][j] = './assets/images/chest.png';
      Swal.fire('Enhorabuena', 'Has encontrado el puto tesoro', 'success');
    } else {
      this.array[i][j] = './assets/images/skull.png';
    }
  }

}
