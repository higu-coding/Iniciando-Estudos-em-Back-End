const express = require('express')
const app = express()
const db = require('./dataBase')
const dbcontext = db.AlunosDataBase()

app.use(express.json())

app.listen(3000, () => {
    console.log('Servidor iniciado.')
}) 

//GET
app.get('/alunos', async (req, res) => {
    res.status(200).send(await dbcontext.list())
})

// GET by ID
app.get('/alunos:id', async (req, res) => {
    res.status(200).send(await dbcontext.get(req.params.id))
})

// POST
app.post('/alunos:id', async (req, res) => {
    res.status(200).send(await dbcontext.insert(req.body))
})

// PUT
app.put('/alunos:id'), async (req, res) => {
    res.status(200).send(await dbcontext.update(req.body, req.params.id))
}

// DELETE
app.delete('/alunos:id'), async (req, res) => {
    await dbcontext.del(req.params.id)
    res.status(200).send('Aluno excluido.')
}