import { Spacecraft, Containership } from './base-ships';
import { MillenniumFalcon } from './starfighters';

import * as _ from 'lodash';
console.log(_.pad("Typescript Example", 40, "="));

let mensagem: string = 'helo word!';
let episodio: number = 4;

episodio = episodio + 1
console.log("O proximo episodio é o " + episodio);

let EoSuficienteParaVencerMF = function (parsecs: number): boolean {
  return parsecs < 12
}
let distancia = 12;

console.log(`Os ${distancia} parsecs são suficientes para vencer a Millennium Falcon? 
${EoSuficienteParaVencerMF(distancia) ? 'SIM' : 'NÃO'}`);


let chamada = (nome: string) => console.log(`Copiar nome, ${nome}`);
chamada('Brunno');


function inc(velocidade: number, inc: number = 1): number {
  return velocidade + inc;
}

console.log(`inc (5, 1) = ${inc(5, 1)}`);
console.log(`inc (5) = ${inc(5)}`);

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



function goodForTheJob(ship: Containership): boolean {
  return ship.cargoContainers > 2
}

let falcon = new MillenniumFalcon()
falcon.jumpIntoHyperspace();

console.log(`Falcon é boa prar o trabalho ? ${goodForTheJob(falcon) ? 'sim' : 'não'}`);
//Modulos exportanto

export interface ModuleExportado{
  VariaveldoModule: boolean;
}
//ou 
//as-para mudar o nome do module
export {ModuleExportado as MxE}