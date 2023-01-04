const express = require('express');
const routes = express.Router();

const PlanetaController = require('../controller/PlanetaController');

routes.post('/planetas', PlanetaController.store);
routes.get('/planetas', PlanetaController.index);
routes.put('/planetas/:id', PlanetaController.put);
routes.delete('/planetas/:id', PlanetaController.delete);

module.exports = routes;