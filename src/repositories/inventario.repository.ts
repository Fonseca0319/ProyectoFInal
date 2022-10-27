import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbPedidosDataSource} from '../datasources';
import {Inventario, InventarioRelations} from '../models';

export class InventarioRepository extends DefaultCrudRepository<
  Inventario,
  typeof Inventario.prototype.idInventario,
  InventarioRelations
> {
  constructor(
    @inject('datasources.MongoDbPedidos') dataSource: MongoDbPedidosDataSource,
  ) {
    super(Inventario, dataSource);
  }
}
