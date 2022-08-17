// RECTANGULO

class rectangulo {
  public alto: number
  public ancho: number
  constructor (alto: number, ancho: number) {
    this.alto = alto
    this.ancho = ancho
  }

  areaRectangulo () {
    return this.alto * this.ancho
  }
}
const area = new rectangulo(10, 10)
console.log(area)
