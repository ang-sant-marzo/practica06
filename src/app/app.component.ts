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

  ngOnInit() {
    this.id = '000' + this.id;
  }


}
