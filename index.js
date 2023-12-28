require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;

const appName= process.env.APP_NAME ?? 'No instance'
const appVersion= process.env.VERSION ?? '--'

// Ruta principal
app.get('/', (req, res) => {
  res.json({message: '¡Hola, mundo!'});
});

// Ruta principal
app.get('/app', (req, res) => {
  res.json({
    appanme: appName,
    version: appVersion
  });
});

// Ruta rand number
app.get('/random', (req, res) => {
  const random = Math.random()
  res.json({
    message: 'rand number', 
    random
  });
});

// Ruta uwu
app.get('/uwu', (req, res) => {
  res.json({
    message: 'UwU', 
  });
});

// Ruta data
app.get('/data', (req, res) => {
  const data = require('./data.json')
  res.json(data);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express escuchando en http://localhost:${port}`);
});
