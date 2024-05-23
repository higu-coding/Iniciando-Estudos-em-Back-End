const express = require('express')
const app = express()
const db = require('./database')
const dbcontext = db.veiculosDatabase()

app.use(express.json())

app.listen(3000, () => {
    console.log('Servidor iniciado.')
})

// GET
app.get('/veiculos', async (req, res) => {
    res.status(200).send(await dbcontext.list())
} )

// GET by ID
app.get('/veiculos:id', async (req, res) => {
    res.status(200).send(await dbcontext.get(req.params.id))
})

// POST
app.post('/veiculos:id', async (req, res) => {
    res.status(200).send(await dbcontext.insert(req.body))
})

// PUT
app.put('/veiculos:id', async (req, res) => {
    res.status(200).send(await dbcontext.update(req.params.id, req.body))
})

// DELETE
app.delete('/veiculos:id', async (req, res) => {
    await dbcontext.del(req.params.id, req.body)
    res.status(200).send('Veiculo vendido')
})