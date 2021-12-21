import { Component, OnInit } from '@angular/core';
import { Posiciones } from 'src/app/api/models';
import { PosicionesContControllerService } from 'src/app/api/services';



@Component({
  selector: 'app-posiciones',
  templateUrl: './posiciones.component.html'
})
export class PosicionesComponent implements OnInit{
  listOfPOS: Posiciones[] = [];
  constructor(
    private posicionesServices:PosicionesContControllerService
  ){}

  ngOnInit(): void {
      this.getData();
      console.log(this.listOfPOS)
  }

getData(): void{
 this.posicionesServices.find().subscribe(data=>this.listOfPOS=data)
}
}
