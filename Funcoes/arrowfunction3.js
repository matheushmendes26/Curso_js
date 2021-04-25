let comparaComThis = function(param){
    console.log(this===param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaArrow = param=> console.log(this===param)
comparaArrow(global)
comparaArrow(module.exports)

comparaArrow = comparaArrow.bind(obj)
comparaArrow(obj)
comparaArrow(module.exports)