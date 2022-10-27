import {Entity, model, property} from '@loopback/repository';

@model()
export class CarroCompras extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idCarrito?: string;

  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;

  @property({
    type: 'string',
    required: true,
  })
  pedido: string;

  @property({
    type: 'number',
    required: true,
  })
  total: number;

  @property({
    type: 'string',
  })
  clienteId?: string;

  constructor(data?: Partial<CarroCompras>) {
    super(data);
  }
}

export interface CarroComprasRelations {
  // describe navigational properties here
}

export type CarroComprasWithRelations = CarroCompras & CarroComprasRelations;
