const http = require('http');
const porta = 443;

const servidor = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('<h1>Primeiro Servidor Node</h1>');
  res.end();
});

servidor.listen(porta, () =>{
 console.log(
    `Servidor rodando na porta ${porta}`) 
})