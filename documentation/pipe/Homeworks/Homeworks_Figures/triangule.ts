// TRIANGULO
class triangulo {
  public alto: number
  public base: number

  constructor (alto: number, base: number) {
    this.alto = alto
    this.base = base
  }

  areaTriangulo () {
    return (this.alto * this.base) / 2
  }
}
const areapipe3 = new triangulo(10, 10)
console.log(areapipe3.areaTriangulo())
