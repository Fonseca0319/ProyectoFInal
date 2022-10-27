import {Entity, model, property, hasOne} from '@loopback/repository';
import {Inventario} from './inventario.model';

@model()
export class Administrador extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idAdmin?: string;

  @property({
    type: 'string',
    required: true,
  })
  gestionPedidos: string;

  @property({
    type: 'string',
    required: true,
  })
  gestionInventario: string;

  @hasOne(() => Inventario)
  inventario: Inventario;

  constructor(data?: Partial<Administrador>) {
    super(data);
  }
}

export interface AdministradorRelations {
  // describe navigational properties here
}

export type AdministradorWithRelations = Administrador & AdministradorRelations;
