//Cadeis de protótipos (prototype chain)
Object.prototype.attr0 = '0'//Cuidado com essa atribuição
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__:pai, attr3: 'C'
}
console.log(filho.attr2)

 const carro = {
     velAtual: 0,
     velMax: 200,
     aceleraMais(delta){
         if(this.velAtual + delta <= this.velMax){
             this.velAtual += delta
         }else{
             this.velAtual = this.velMax
         }
     },
     status(){
         return `${this.velAtual}Km/h de ${this.velMax} Km/h`
     }
 }

 const ferrari ={
     modelo: 'F40',
     velMax: 300
 }

 const volvo = {
     modelo: 'V40',
     velMax: 324,
     status(){
         return `${this.modelo}: ${super.status()}`
     }
}

Object.setPrototypeOf(ferrari,carro)
Object.setPrototypeOf(volvo,carro)
console.log(volvo)
volvo.aceleraMais(100)
console.log(volvo)
volvo.aceleraMais(20)
console.log(volvo.status())

