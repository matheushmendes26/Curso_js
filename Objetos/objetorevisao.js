//coleção dinamica de pareschave/valor
const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console(produto)

const carro ={
    modelo: 'A4',
    valor: 89000,
    proprietario:{
        nome: "Raul",
        idade: 67,
        endereco:{
            logradouro:"Rua A",
            numero_do_log: 555,
            bairro: "TATA",
            CEP: 33333333
        }
    },
    condutores: [{
        nome: 'Julio',
        idade: 19
    },{
        nome: 'Ana',
        idade: 46
    }
],
 calcularValorSeguro: function(){
     
 }
}

