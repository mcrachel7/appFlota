/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<TipoVehiculo, 'y'>, schemaOptions: { title: 'NewTipoVehiculo', exclude: [ 'y' ] })
 */
export interface NewTipoVehiculo {
  camion: string;
  id?: string;
  pickup: string;

  [key: string]: any;
}
