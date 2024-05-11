const express = require('express')
const app = express()

app.use(express.json())

const veiculos = []

// Vai mostrar todos os veiculos da concessionária
app.get('/veiculos', (req, res) => {
    console.log("Aqui estão os veiculos da concessionária")
    res.status(200).send({veiculos :veiculos})
})

// Vai mostrar um veiculo especifico da concessionária
app.get('/veiculos/:id', (req, res) => {
    const veiculo = veiculos.find(x => x.id == req.params.id)
    res.status(200).send(veiculo)
})

// Vai cadastrar um veiculo na concessionária
app.post('/veiculos', (req, res)=> {
    console.log("Veiculo cadastrado com sucesso")
    veiculos.push(req.body)
    res.status(200).send(req.body)
})

// Vai atualizar os dados de um veiculo
app.put('/veiculos/:id', (req, res) =>{
    console.log("Veiculo atualizado com sucesso")
    const veiculo = veiculos.find(x => x.id == req.params.id)
    const idVeiculo = veiculos.indexOf(veiculo)
    res.status(200).send("Veiculo atualizado com sucesso")
})

// Vai excluir um veiculo vendido
app.delete('/veiculos/:id', (req, res) => {
    console.log("Veiculo excluido com sucesso")
    const veiculo = veiculos.find(x => x.id == req.params.id)
    const idVeiculo = veiculos.indexOf(veiculo)
    veiculos.splice(idVeiculo, 1)
    res.status(200).send('Veiculo excluido com sucesso')
})


app.listen(3000, () => {
    console.log("Servidor iniciado.")
})