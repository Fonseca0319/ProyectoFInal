import {Entity, model, property} from '@loopback/repository';

@model()
export class Producto extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idProducto?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombreDeProducto: string;

  @property({
    type: 'number',
    required: true,
  })
  precioProducto: number;

  @property({
    type: 'string',
    required: true,
  })
  descripcionProducto: string;


  constructor(data?: Partial<Producto>) {
    super(data);
  }
}

export interface ProductoRelations {
  // describe navigational properties here
}

export type ProductoWithRelations = Producto & ProductoRelations;
