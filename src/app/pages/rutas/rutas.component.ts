import { Component } from '@angular/core';
import { Rutas } from 'src/app/api/models';
import { RutasContControllerService } from 'src/app/api/services';


@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html'
})
export class RutasComponent {
  listOfRutas: Rutas[] = [];

  constructor(
    private rutasServices:RutasContControllerService
  ){}

  ngOnInit(): void {
      this.getData();
      console.log(this.listOfRutas)
  }

getData(): void{
 this.rutasServices.find().subscribe(data=>this.listOfRutas=data)
}
}
