import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbPedidosDataSource} from '../datasources';
import {CarroCompras, CarroComprasRelations} from '../models';

export class CarroComprasRepository extends DefaultCrudRepository<
  CarroCompras,
  typeof CarroCompras.prototype.idCarrito,
  CarroComprasRelations
> {
  constructor(
    @inject('datasources.MongoDbPedidos') dataSource: MongoDbPedidosDataSource,
  ) {
    super(CarroCompras, dataSource);
  }
}
