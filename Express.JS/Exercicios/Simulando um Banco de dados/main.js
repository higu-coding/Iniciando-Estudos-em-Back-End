const express = require('express')
const app = express()

app.use(express.json())

const alunos = []

//Vai buscar todos os alunos, GET
app.get('/alunos', (req, res) => {
    console.log('Aqui estão todos os alunos cadastrados')
    res.status(200).send({alunos :alunos}) // cria um objeto primeiro, e a lista/array vai estar dentro de um objeto
})

//Vai buscar um aluno especifico, GET
app.get('/alunos/:id/:name', (req, res) => {
    const aluno = alunos.find(x => x.id == req.params.id) // Vai buscar um aluno especifico
    res.status(200).send(aluno)
})

//Vai cadastrar um novo aluno, POST
app.post('/alunos', (req, res) => {
    console.log('Aluno cadastrado com sucesso')
    alunos.push(req.body)
    res.status(200).send(req.body)
})

//Vai atualizar o cadastro do aluno, PUT
app.put('/alunos/:id', (req, res) => {
    console.log('Aluno atualizado com sucesso')
    const aluno = alunos.find(x => x.id == req.params.id)
    const idAluno = alunos.indexOf(aluno)
    res.status(200).send('Aluno atualizado com sucesso')
})

//Vai deletar o cadastro do aluno, DELETE
app.delete('/alunos/:id', (req, res) => {
    console.log('Aluno excluido com sucesso')
    const aluno = alunos.find(x => x.id == req.params.id)
    const idAluno = alunos.indexOf(aluno)
    alunos.splice(idAluno, 1)
    res.status(200).send('Aluno excluido com sucesso')
})

app.listen(3000, () => {
    console.log('Servidor iniciado.')
})