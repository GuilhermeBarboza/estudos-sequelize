const express = require('express');
const routes = require('./routes'); //

const app = express(); // manipula as requisições e as portas

app.use(express.json());
app.use(routes);

app.listen(3000);