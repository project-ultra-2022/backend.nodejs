class TrianguloSa {
  alto: number
  base: number
  constructor (alto: number, base: number) {
    this.alto = alto
    this.base = base
  }

  area () {
    return (this.alto * this.base) / 2
  }
}

const cuadrado = new TrianguloSa(10, 10)
console.log(cuadrado.area())
