const pessoa = {
    saudacao:'Hello',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() //Conflito entre programação funcional e orientada a obj

const falarDepessoa = pessoa.falar.bind(pessoa)
falarDepessoa()
