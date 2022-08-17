class Rectangulo {
  alto: number
  ancho: number
  constructor (alto: number, ancho: number) {
    this.alto = alto
    this.ancho = ancho
  }

  area () {
    return this.alto * this.ancho
  }
}

const cuadrado = new Rectangulo(10, 10)
console.log(cuadrado.area())
