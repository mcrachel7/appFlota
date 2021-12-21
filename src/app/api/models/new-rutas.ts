/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Rutas, 'y'>, schemaOptions: { title: 'NewRutas', exclude: [ 'y' ] })
 */
export interface NewRutas {
  Distancia: number;
  id?: string;
  lugar_final: string;
  lugar_inicio: string;

  [key: string]: any;
}
