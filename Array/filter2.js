Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i< this.length; i++){

        if (callback(this[i],i,this)){
            newArray.push(this[i])
        }else{}
        
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook',preco: 2499, fragil:true},
    {nome: 'iPad Pro',preco: 4199, fragil:true},
    {nome: 'Copo de vidro',preco: 12.49, fragil:true},
    {nome: 'Copo de plástico',preco: 18.99, fragil:false}

]

const verificarFragil = verifica => verifica.fragil
const verificarCaro = k => k.preco > 1000

const resultado = produtos.filter2(verificarFragil).filter2(verificarCaro)
console.log(resultado)
