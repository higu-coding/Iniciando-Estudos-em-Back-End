// Implementação 
// ## **Como implementar**

// 1. Primeiro criar um servidor com .createServer()

// 2. Definir que esse servidor vai escutar a porta 3000 com o  mmétodo .listen()

// 3. Implementar para que toda requisitação do método GET retorne um status code 200 através do .writeHead()

// 4. Enviar a resposta para o cliente com o corpo da mensagem com o método .end()

const http = require('http');

const server = http.createServer((req, res) => {
    if(req.method === 'GET'){
        res.writeHead(200);
        res.end('Hello World!');
        console.log('Requisição GET recebida');
    }
});

server.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});