const express = require('express')
const app = express()

app.use(express.json())

//No código abaixo vai buscar todos os usuarios, usando GET
app.get('/usuario', (req, res)=> {
    console.log('Aqui estão todos os usuarios')
    res.status(200).send('Usuarios encontrados')
})

//No código abaixo vai buscar um usuario especifico, usando GET
app.get('/usuario/:id', (req, res)=> {
    console.log(req.params.id)
    console.log('Aqui está um usuario especifico.')
    res.status(200).send('Usuario encontrado')
})

//No código abaixo vai cadastrar um novo usuario, usando POST
app.post('/usuario', (req, res) =>{
    console.log('Usuario cadastrado')
    res.status(200).send(req.body)
})

//No código abaixo vai atualizar os dados do usuario, usando
app.put('/usuario/:id', (req, res) => {
    console.log('Usuario Atualizado')
    res.status(200).send(req.params.id)
})

//No código abaixo vai atualizar os dados do usuario
app.delete('/usuario/:id', (req, res) => {
    console.log('Usuario Deletado')
    res.status(200).send(req.params.id)
})

app.listen(3000, ()=> {
    console.log('Servidor iniciado.')
})