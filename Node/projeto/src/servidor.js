const port  = 3003

const express = require('express')
const app = express()
const bancodedaos = require('./bancoDeDados')
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({extended: true}))


app.get('/produtos',(req,res,next)=>{
    res.send(bancodedaos.getProdutos()) // Converte para JSON
})

app.get('/produtos/:id',(req,res,next)=>{
    res.send(bancodedaos.getProduto(req.params.id))
})

app.post('/produtos',(req,res,next)=>{
    const produto = bancodedaos.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id',(req,res,next)=>{
    const produto = bancodedaos.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id',(req,res,next)=>{
    const produto = bancodedaos.excluirProdutos(req.params.id)
    res.send(produto)
})


app.listen(port,()=>{
    console.log(`Servidor esta executando na porta ${port}.`)
})



