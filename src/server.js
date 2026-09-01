const http = require('http');
const fs = require('fs');
const path = require('path');
const homeRoute = require('./routes/home');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    return homeRoute(req, res);
  }

  if (req.url === '/api/saludo' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ mensaje: 'Hola desde la API' }));
  }

  if (req.url.startsWith('/public/')) {
    const filePath = path.join(__dirname, '..', req.url);
    return fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        return res.end('Archivo no encontrado');
      }
      res.writeHead(200);
      res.end(data);
    });
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('404 - Ruta no encontrada');
});

server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
