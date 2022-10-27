import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbPedidosDataSource} from '../datasources';
import {LineaDeProducto, LineaDeProductoRelations} from '../models';

export class LineaDeProductoRepository extends DefaultCrudRepository<
  LineaDeProducto,
  typeof LineaDeProducto.prototype.idLineaProducto,
  LineaDeProductoRelations
> {
  constructor(
    @inject('datasources.MongoDbPedidos') dataSource: MongoDbPedidosDataSource,
  ) {
    super(LineaDeProducto, dataSource);
  }
}
