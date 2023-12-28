const express = require('express');
const app = express();
const port = 3000;

const appName= 'Test'

// Ruta principal
app.get('/', (req, res) => {
  res.json({message: '¡Hola, mundo!'});
});

// Ruta principal
app.get('/app', (req, res) => {
  res.json({appanme: appName});
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express escuchando en http://localhost:${port}`);
});
