import {Entity, model, property} from '@loopback/repository';

@model()
export class LineaDeProducto extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idLineaProducto?: string;

  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;

  @property({
    type: 'number',
    required: true,
  })
  subtotal: number;


  constructor(data?: Partial<LineaDeProducto>) {
    super(data);
  }
}

export interface LineaDeProductoRelations {
  // describe navigational properties here
}

export type LineaDeProductoWithRelations = LineaDeProducto & LineaDeProductoRelations;
