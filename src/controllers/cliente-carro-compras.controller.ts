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
  Cliente,
  CarroCompras,
} from '../models';
import {ClienteRepository} from '../repositories';

export class ClienteCarroComprasController {
  constructor(
    @repository(ClienteRepository) protected clienteRepository: ClienteRepository,
  ) { }

  @get('/clientes/{id}/carro-compras', {
    responses: {
      '200': {
        description: 'Cliente has one CarroCompras',
        content: {
          'application/json': {
            schema: getModelSchemaRef(CarroCompras),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<CarroCompras>,
  ): Promise<CarroCompras> {
    return this.clienteRepository.carroCompras(id).get(filter);
  }

  @post('/clientes/{id}/carro-compras', {
    responses: {
      '200': {
        description: 'Cliente model instance',
        content: {'application/json': {schema: getModelSchemaRef(CarroCompras)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Cliente.prototype.idCLiente,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CarroCompras, {
            title: 'NewCarroComprasInCliente',
            exclude: ['idCarrito'],
            optional: ['clienteId']
          }),
        },
      },
    }) carroCompras: Omit<CarroCompras, 'idCarrito'>,
  ): Promise<CarroCompras> {
    return this.clienteRepository.carroCompras(id).create(carroCompras);
  }

  @patch('/clientes/{id}/carro-compras', {
    responses: {
      '200': {
        description: 'Cliente.CarroCompras PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CarroCompras, {partial: true}),
        },
      },
    })
    carroCompras: Partial<CarroCompras>,
    @param.query.object('where', getWhereSchemaFor(CarroCompras)) where?: Where<CarroCompras>,
  ): Promise<Count> {
    return this.clienteRepository.carroCompras(id).patch(carroCompras, where);
  }

  @del('/clientes/{id}/carro-compras', {
    responses: {
      '200': {
        description: 'Cliente.CarroCompras DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(CarroCompras)) where?: Where<CarroCompras>,
  ): Promise<Count> {
    return this.clienteRepository.carroCompras(id).delete(where);
  }
}
