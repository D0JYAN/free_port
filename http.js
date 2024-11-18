const http = require('node:http');
const { findAvailablePort } = require('./puerto_Libre.js');

const server = http.createServer((req, res) => {
    console.log('request recibida');
    res.end('Hola mundo');
})

findAvailablePort(3000).then(port => {
    server.listen(port, () => {
        console.log(`servidor escuchando en el puerto http://localhost:${port}`);
    })
})