const ferrari = {
    modelo: 'F40',
    valMax: 324
}

const volvo ={
    modelo: 'V40',
    valMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

function MeuOBJ(){}
console.log(typeof Object, typeof MeuOBJ)
console.log(Object.prototype, MeuOBJ.prototype)
