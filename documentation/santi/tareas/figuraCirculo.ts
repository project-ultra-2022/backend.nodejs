class Circulo {
  radio: number
  constructor (radio: number) {
    this.radio = radio
  }

  area () {
    return Math.round(Math.PI * this.radio * this.radio)
  }
}

const circulo = new Circulo(10)
console.log(circulo.area())
