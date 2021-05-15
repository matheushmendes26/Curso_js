const removerVogais = function(str){

    let str2 = ''
    for(let i = 0; i< str.length;i++){
        if(str[i]!='a'&& str[i]!='e'&& str[i]!= 'i' && str[i] != 'o' && str[i] != 'u' &&
        str[i]!='A'&& str[i]!='E'&& str[i]!= 'I' && str[i] != 'O' && str[i] != 'U'){
            str2 = str2+str[i]

        }
    }

    return str2
}

console.log(removerVogais("Objetos"))
