
 class Spacecraft { 

  constructor(public propulsor: string) {   
   // construtor serve para instanciar objetos da classe na qual esse construtor foi definido.
   // A inicialização de objetos por meio de construtores é necessária para evitar erro de referência 
   // nula quando usando objetos que foram declarados mas não inicializados.        
  }
  jumpIntoHyperspace(){
    console.log(`Entrando no hiper-espaço com ${this.propulsor}`);
  }

}

interface Containership {
  cargoContainers: number;
}

export {Spacecraft,  Containership}