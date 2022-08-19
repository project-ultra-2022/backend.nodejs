class RectanguloSa {
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

const figuraSa2 = new RectanguloSa(10, 10)
console.log(figuraSa2.area())
