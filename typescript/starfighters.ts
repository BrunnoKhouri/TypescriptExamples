import { Spacecraft, Containership } from './base-ships';

class MillenniumFalcon extends Spacecraft
  implements Containership {
  cargoContainers: number;

  constructor() {
    super("hypedrive");
    this.cargoContainers = 4;
  }

  jumpIntoHyperspace() {

    if (Math.random() >= 0.5) {
      super.jumpIntoHyperspace();
    } else {
      console.log('Falha no salto ao hiper-espaço');
    }
    
  }
}

export{MillenniumFalcon}