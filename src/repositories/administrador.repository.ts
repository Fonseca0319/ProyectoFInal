import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {MongoDbPedidosDataSource} from '../datasources';
import {Administrador, AdministradorRelations, Inventario} from '../models';
import {InventarioRepository} from './inventario.repository';

export class AdministradorRepository extends DefaultCrudRepository<
  Administrador,
  typeof Administrador.prototype.idAdmin,
  AdministradorRelations
> {

  public readonly inventario: HasOneRepositoryFactory<Inventario, typeof Administrador.prototype.idAdmin>;

  constructor(
    @inject('datasources.MongoDbPedidos') dataSource: MongoDbPedidosDataSource, @repository.getter('InventarioRepository') protected inventarioRepositoryGetter: Getter<InventarioRepository>,
  ) {
    super(Administrador, dataSource);
    this.inventario = this.createHasOneRepositoryFactoryFor('inventario', inventarioRepositoryGetter);
    this.registerInclusionResolver('inventario', this.inventario.inclusionResolver);
  }
}
