const express = require('express'); // Importa o EXPRESS
const app = express();

app.use(express.json()) // Aqui fala que vão ser usados arquivos JSON


// Vai ser responsavel por pegar todos os usuarios
app.get('/users', (req, res) => {
    console.log(req.query)
    console.log('Entrou em users')
    res.status(200).send("Deu certo")
})

// Vai pegar um usuario especifico
app.get('/users/:id/:idade', (req, res) => {
    console.log(req.params.id)
    console.log(req.params.idade)
    console.log('Entrou em users')
    res.status(200).send("Deu certo")
})

app.post('/users', (req, res) => {
    console.log(req.body)
    console.log('Entrou em users')
    res.status(200).send(req.body) // o ideal é sempre retornar JSON
})

app.listen(3000, () => {  // Define a porta que vai ser "ouvida" do servidor
    console.log("Server started.")
})


