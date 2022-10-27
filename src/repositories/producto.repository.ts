import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbPedidosDataSource} from '../datasources';
import {Producto, ProductoRelations} from '../models';

export class ProductoRepository extends DefaultCrudRepository<
  Producto,
  typeof Producto.prototype.idProducto,
  ProductoRelations
> {
  constructor(
    @inject('datasources.MongoDbPedidos') dataSource: MongoDbPedidosDataSource,
  ) {
    super(Producto, dataSource);
  }
}
