const express = require('express');
const routes = express.Router();

const PlanetaController = require('../controller/PlanetaController');
const SateliteController = require('../controller/SateliteController');
const CapController = require('../controller/CapController');
const NaveController = require('../controller/NaveController');


routes.post('/planetas', PlanetaController.store);
routes.get('/planetas', PlanetaController.index);
routes.put('/planetas/:id', PlanetaController.put);
routes.delete('/planetas/:id', PlanetaController.delete);

routes.post('/planeta/:planetaId/satelites', SateliteController.store);
routes.get('/planeta/:planetaId/satelites', SateliteController.index);

routes.post('/cap', CapController.store);
routes.get('/cap', CapController.index);

routes.post('/caps/:capId/naves', NaveController.store);
routes.get('/caps/:capId/naves', NaveController.index);



module.exports = routes;