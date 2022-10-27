import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, HasOneRepositoryFactory} from '@loopback/repository';
import {MongoDbPedidosDataSource} from '../datasources';
import {Cliente, ClienteRelations, Compra, CarroCompras} from '../models';
import {CompraRepository} from './compra.repository';
import {CarroComprasRepository} from './carro-compras.repository';

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype.idCLiente,
  ClienteRelations
> {

  public readonly compras: HasManyRepositoryFactory<Compra, typeof Cliente.prototype.idCLiente>;

  public readonly carroCompras: HasOneRepositoryFactory<CarroCompras, typeof Cliente.prototype.idCLiente>;

  constructor(
    @inject('datasources.MongoDbPedidos') dataSource: MongoDbPedidosDataSource, @repository.getter('CompraRepository') protected compraRepositoryGetter: Getter<CompraRepository>, @repository.getter('CarroComprasRepository') protected carroComprasRepositoryGetter: Getter<CarroComprasRepository>,
  ) {
    super(Cliente, dataSource);
    this.carroCompras = this.createHasOneRepositoryFactoryFor('carroCompras', carroComprasRepositoryGetter);
    this.registerInclusionResolver('carroCompras', this.carroCompras.inclusionResolver);
    this.compras = this.createHasManyRepositoryFactoryFor('compras', compraRepositoryGetter,);
    this.registerInclusionResolver('compras', this.compras.inclusionResolver);
  }
}
