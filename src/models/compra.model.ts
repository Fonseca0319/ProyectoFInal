import {Entity, model, property} from '@loopback/repository';

@model()
export class Compra extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idCompra?: string;

  @property({
    type: 'string',
    required: true,
  })
  producto: string;

  @property({
    type: 'number',
    required: true,
  })
  total: number;

  @property({
    type: 'number',
    required: true,
  })
  cantidadDeProducto: number;

  @property({
    type: 'string',
  })
  clienteId?: string;

  constructor(data?: Partial<Compra>) {
    super(data);
  }
}

export interface CompraRelations {
  // describe navigational properties here
}

export type CompraWithRelations = Compra & CompraRelations;
