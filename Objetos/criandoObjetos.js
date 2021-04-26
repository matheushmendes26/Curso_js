//usando notação literal
const objt = {}
console.log(objt)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2  = new Object
console.log(obj2)

//Funçoes construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = ()=> {
        return preco * (1-desc)
    }
}

const p1 = new Produto("Caneta",2,0.05)
const p2 = new Produto("Geladeira",2300,0.10)
console.log(p1.getPrecoComDesconto())


//funcao construtora
function criarFormulario(nome, salario, faltas){
    return{
        nome,
        salario,
        faltas,
        getSalario(){
            return (salario/30)*(30-faltas)
        }
    }
}

const f1 = criarFormulario('Joao',2500,3)
console.log(f1.getSalario())

//Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma função famosa que retorna Objeto
const fromJSON = JSON.parse('{"info: Eu SOU UM JSON"}')
console.log(fromJSON.info)
