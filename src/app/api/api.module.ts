/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { LicenciasContControllerService } from './services/licencias-cont-controller.service';
import { PingControllerService } from './services/ping-controller.service';
import { PosicionesContControllerService } from './services/posiciones-cont-controller.service';
import { RutasContControllerService } from './services/rutas-cont-controller.service';
import { UsersControllerService } from './services/users-controller.service';
import { TipovehiculoContControllerService } from './services/tipovehiculo-cont-controller.service';
import { TransportistasContControllerService } from './services/transportistas-cont-controller.service';
import { VehiculosContControllerService } from './services/vehiculos-cont-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    LicenciasContControllerService,
    PingControllerService,
    PosicionesContControllerService,
    RutasContControllerService,
    UsersControllerService,
    TipovehiculoContControllerService,
    TransportistasContControllerService,
    VehiculosContControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
