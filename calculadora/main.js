var a = 10;
var b = 10;

var soma = require("./operacoes/soma");
var mult = require("./operacoes/multiplicacao");
var div = require("./operacoes/divisao");
var sub = require("./operacoes/subtracao");

console.log(soma(a, b));
console.log(mult(a, b));
console.log(div(a, b));
console.log(sub(a, b));
