const express = require('express');
const app = express();

// Middlewares
app.use(express.json());

// Ruta raíz para ver si el servidor está funcionando
app.get('/', (req, res) => {
  res.send('✅ Backend WebVentas funcionando correctamente');
});

// Exportar app para usar en index.js
module.exports = app;
