function Carro(velMax = 200,delta = 5){
    //atributo privado
    let velatual = 0
    //método público
    this.acelerar = function (){
        if(velatual+ delta<=velMax)
        {
            velatual +=delta
        }else{
            velatual = velMax
        }
    }
    //método público=
    this.GetvelAtual = function(){
        return velatual
    }

}

const uno = new Carro
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log(uno.GetvelAtual())

const Ferrari = new Carro(300,100)
Ferrari.acelerar()
Ferrari.acelerar()
console.log(Ferrari.GetvelAtual())