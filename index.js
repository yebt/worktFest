require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;

const appName= process.env.APP_NAME ?? 'No instance'
const appVersion= process.env.VERSION ?? '--'
const appLogo= process.env.LOGO ?? ''

// Ruta principal
app.get('/', (req, res) => {
  res.json({message: '¡Hola, mundo!'});
});

// Ruta principal
app.get('/app', (req, res) => {
  res.json({
    message: 'APP',
    appanme: appName,
    version: appVersion,
    logo:appLogo
  });
});

// Ruta principal
app.get('/random', (req, res) => {
  const random = Math.random()
  res.json({
    message: 'rand number', 
    random
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express escuchando en http://localhost:${port}`);
});
