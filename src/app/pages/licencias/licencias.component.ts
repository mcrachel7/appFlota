import { Component, OnInit } from '@angular/core';
import { Licencias } from 'src/app/api/models';
import { LicenciasContControllerService } from 'src/app/api/services';


@Component({
  selector: 'app-licencias',
  templateUrl: './licencias.component.html'
})
export class LicenciasComponent implements OnInit{
  listOfLicencias: Licencias[] = [];

  constructor(
    private licenciasServices:LicenciasContControllerService
  ){}

  ngOnInit(): void {
      this.getData();
      console.log(this.listOfLicencias)
  }

getData(): void{
 this.licenciasServices.find().subscribe(data=>this.listOfLicencias=data)
}
}
