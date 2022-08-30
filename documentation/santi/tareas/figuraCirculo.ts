class Circulos {
  radio: number;
  constructor(radio: number) {
    this.radio = radio;
  }

  area() {
    return Math.round(Math.PI * this.radio * this.radio);
  }
}

const circulos = new Circulos(10);
console.log(circulos.area());
