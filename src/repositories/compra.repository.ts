import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbPedidosDataSource} from '../datasources';
import {Compra, CompraRelations} from '../models';

export class CompraRepository extends DefaultCrudRepository<
  Compra,
  typeof Compra.prototype.idCompra,
  CompraRelations
> {
  constructor(
    @inject('datasources.MongoDbPedidos') dataSource: MongoDbPedidosDataSource,
  ) {
    super(Compra, dataSource);
  }
}
