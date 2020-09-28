// GET --> Buscar ou listar uma informação
// POST --> Criar alguma nova informação
// PUT --> Atualizar uma informação existente
// DELETE --> Deletar uma informação existente

// Corpo (Request Body) --> Dados para criação ou atualização de um registro
// Route Params --> Identificar qual recurso eu quero atualizar ou deletar
// Query Params --> Paginação, filtros, ordenação

import express from 'express'

import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const classesControllers = new ClassesController()
const connectionsController = new ConnectionsController()
const routes = express.Router();

// Rota utilizada para a criação das aulas juntamente com os professores
routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)



export default routes;