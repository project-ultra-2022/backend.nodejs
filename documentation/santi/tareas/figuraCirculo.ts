class CirculoSa {
  radio: number;
  constructor(radio: number) {
    this.radio = radio;
  }

  area() {
    return Math.round(Math.PI * this.radio * this.radio);
  }
}

const circulosa = new CirculoSa(10);
console.log(circulosa.area());
