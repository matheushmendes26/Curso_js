/*
class Pessoa{
    constructor(nome){
        this.nome = nome
    }


    falar(){
        console.log('Meu nome é',this.nome)
    }
}*/

function Pessoa2(nome){
    this.nome = nome
    //método público
    this.falar = function (){
        console.log("Meu nome é",this.nome)
    }
}

const K = new Pessoa2('Joao')
K.falar()

