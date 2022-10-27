import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbPedidosDataSource} from '../datasources';
import {Persona, PersonaRelations} from '../models';

export class PersonaRepository extends DefaultCrudRepository<
  Persona,
  typeof Persona.prototype.idPersona,
  PersonaRelations
> {
  constructor(
    @inject('datasources.MongoDbPedidos') dataSource: MongoDbPedidosDataSource,
  ) {
    super(Persona, dataSource);
  }
}
