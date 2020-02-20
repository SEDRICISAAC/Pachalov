const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3000;
const rutas = require('./controllers/authController');
const rutasWheater = require('./controllers/tiempoController');
const rutasUser = require('./controllers/usuarioController');
const rutasPlants = require('./controllers/huertoController');
const rutasTips = require('./controllers/tipsController')
const rutasSuelos = require('./controllers/sueloController')
const rutasPlantas = require('./controllers/plantaController')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/server',rutas);
app.use('/server/client', rutasWheater);
app.use('/server', rutasUser);
app.use('/server', rutasPlants);
app.use('/server',rutasTips);
app.use('/server',rutasSuelos);
app.use('/server',rutasPlantas);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
})
