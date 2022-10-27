import {Entity, model, property, hasMany, hasOne} from '@loopback/repository';
import {Compra} from './compra.model';
import {CarroCompras} from './carro-compras.model';

@model()
export class Cliente extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idCLiente?: string;

  @hasMany(() => Compra)
  compras: Compra[];

  @hasOne(() => CarroCompras)
  carroCompras: CarroCompras;

  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
