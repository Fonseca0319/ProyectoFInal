import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Administrador,
  Inventario,
} from '../models';
import {AdministradorRepository} from '../repositories';

export class AdministradorInventarioController {
  constructor(
    @repository(AdministradorRepository) protected administradorRepository: AdministradorRepository,
  ) { }

  @get('/administradors/{id}/inventario', {
    responses: {
      '200': {
        description: 'Administrador has one Inventario',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Inventario),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Inventario>,
  ): Promise<Inventario> {
    return this.administradorRepository.inventario(id).get(filter);
  }

  @post('/administradors/{id}/inventario', {
    responses: {
      '200': {
        description: 'Administrador model instance',
        content: {'application/json': {schema: getModelSchemaRef(Inventario)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Administrador.prototype.idAdmin,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inventario, {
            title: 'NewInventarioInAdministrador',
            exclude: ['idInventario'],
            optional: ['administradorId']
          }),
        },
      },
    }) inventario: Omit<Inventario, 'idInventario'>,
  ): Promise<Inventario> {
    return this.administradorRepository.inventario(id).create(inventario);
  }

  @patch('/administradors/{id}/inventario', {
    responses: {
      '200': {
        description: 'Administrador.Inventario PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inventario, {partial: true}),
        },
      },
    })
    inventario: Partial<Inventario>,
    @param.query.object('where', getWhereSchemaFor(Inventario)) where?: Where<Inventario>,
  ): Promise<Count> {
    return this.administradorRepository.inventario(id).patch(inventario, where);
  }

  @del('/administradors/{id}/inventario', {
    responses: {
      '200': {
        description: 'Administrador.Inventario DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Inventario)) where?: Where<Inventario>,
  ): Promise<Count> {
    return this.administradorRepository.inventario(id).delete(where);
  }
}
