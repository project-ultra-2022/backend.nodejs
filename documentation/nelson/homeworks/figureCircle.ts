class Circunferencia {
  radio: number
  constructor (RadioCircunferencia: number) {
    this.radio = RadioCircunferencia
  }

  getArea (): number {
    return Math.round(this.radio * this.radio * Math.PI)
  }
}

const Circulo = new Circunferencia(10)

console.log(Circulo.getArea())
