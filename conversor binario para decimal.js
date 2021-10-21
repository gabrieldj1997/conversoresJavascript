//BINARIO PARA DECIMAL
var conversor = (str) => {
    var result = 0;
    for(let i=0;i<str.length;i++) {
        let number = parseInt(str[i]);
        result += (number * Math.pow(2, (str.length - 1) - i));
    }
    return result;
}

var number = conversor('11101010101110');
console.log(number);