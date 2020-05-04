export class Cars {
  year: number;

  constructor() {
    this.year = 10;
  }

  drive(speed) {
    // error in strict mode, to fix it add a type to it --> speed: number
    console.log(`Driving at ${speed}`);
  }
}

const myCar = new Cars();
console.log(myCar.year);
