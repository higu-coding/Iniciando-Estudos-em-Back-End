// Tratamento de recursos não encontrados

const http = require('http');

const server = http.createServer((req, res) => {
    // Aqui você deve adicionar a lógica para lidar com as requisições recebidas
    if(req.method === 'GET') {
        res.writeHead(200)
        res.end("Hello")
    }

    // Se não encontrar o endpoint, envie uma resposta com o status code 404
    res.writeHead(404)
    res.end("Endpoint nao encontrado");
});

server.listen(3000, () => {
    console.log("Servidor iniciado em http://localhost:3000")
})