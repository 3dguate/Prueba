const fs = require('fs');
const path = require('path');

module.exports = function homeRoute(req, res) {
  const filePath = path.join(__dirname, '..', '..', 'public', 'index.html');
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      return res.end('Error al cargar la página');
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
};
