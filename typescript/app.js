"use strict";
exports.__esModule = true;
var starfighters_1 = require("./starfighters");
var _ = require("lodash");
console.log(_.pad("Typescript Example", 40, "="));
var mensagem = 'helo word!';
var episodio = 4;
episodio = episodio + 1;
console.log("O proximo episodio é o " + episodio);
var EoSuficienteParaVencerMF = function (parsecs) {
    return parsecs < 12;
};
var distancia = 12;
console.log("Os ".concat(distancia, " parsecs s\u00E3o suficientes para vencer a Millennium Falcon? \n").concat(EoSuficienteParaVencerMF(distancia) ? 'SIM' : 'NÃO'));
var chamada = function (nome) { return console.log("Copiar nome, ".concat(nome)); };
chamada('Brunno');
function inc(velocidade, inc) {
    if (inc === void 0) { inc = 1; }
    return velocidade + inc;
}
console.log("inc (5, 1) = ".concat(inc(5, 1)));
console.log("inc (5) = ".concat(inc(5)));
//node app
//tsc app
// Clases são representações do mundo real
// servem para definição de um objeto 
// let ship = new Spacecraft('hyperdrive')
// ship.jumpIntoHyperspace()
//INTERFACES
// Definem um contrato que classes que implementam devem obdecer.
// Conjunto de atributos ou um determinado comportamento que pode ser comum a varios objetos.
// Extends
// O TypeScript permite que uma interface estenda uma classe .
// Nesse caso, a interface herda as propriedades e métodos da classe.
// Além disso, a interface pode herdar os membros privados e protegidos da classe, não apenas os membros públicos.
// Implements
// A nova classe pode ser tratada como a mesma "forma" , mas não é um filho .
// Ele pode ser passado para qualquer método onde Personfor necessário,
// independentemente de ter um pai diferente de Person.
function goodForTheJob(ship) {
    return ship.cargoContainers > 2;
}
var falcon = new starfighters_1.MillenniumFalcon();
falcon.jumpIntoHyperspace();
console.log("Falcon \u00E9 boa prar o trabalho ? ".concat(goodForTheJob(falcon) ? 'sim' : 'não'));
