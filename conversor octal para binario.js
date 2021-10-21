//OCTAL PARA BINARIO
var conversor = (str) => {
    var result = 0;
    for(let i=0;i<str.length;i++) {
        let number = parseInt(str[i]);
        result += (number * Math.pow(8, (str.length - 1) - i));
    }
    return result;
}

var number = conversor('38');
console.log(number);

let num = '24539'
console.log(num.length)