console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
//Toda função tem um atributo chamado prototype

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}
console.log('Matheus'.reverse())

Array.prototype.first = function(){
    return this[0]
}


console.log([1,2,3,4,3].first())
