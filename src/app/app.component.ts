import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  texto: string = 'ciudad de Madrid';
  id: any = 1;
  fecha: object = new Date();
  importe: number = 781236.6743;
  actor: object = {
    nombre: 'Robert',
    apellidos: 'De Niro'
  }
  decimales: number = 0;

  ngOnInit() {
    this.id = '000' + this.id;
  }

  setDecimales(e: number) {
    if (this.decimales + e >= 0) {
      this.decimales += e;
    }
  }


}
