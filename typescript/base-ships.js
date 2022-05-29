"use strict";
exports.__esModule = true;
exports.Spacecraft = void 0;
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
        // construtor serve para instanciar objetos da classe na qual esse construtor foi definido.
        // A inicialização de objetos por meio de construtores é necessária para evitar erro de referência 
        // nula quando usando objetos que foram declarados mas não inicializados.        
    }
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entrando no hiper-espa\u00E7o com ".concat(this.propulsor));
    };
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;
