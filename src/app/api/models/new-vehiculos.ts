/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Vehiculos, 'id'>, schemaOptions: { title: 'NewVehiculos', exclude: [ 'id' ] })
 */
export interface NewVehiculos {
  Color: string;
  Marca: string;
  id_placa?: string;
  tipo: string;

  [key: string]: any;
}
