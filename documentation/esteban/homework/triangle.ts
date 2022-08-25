
class Triangle {
  height: number
  base: number
  constructor (heighT: number, baseT: number) {
    this.height = heighT
    this.base = baseT
  }

  area (): number {
    return (this.height * this.base) / 2
  }
}
const areaTrian = new Triangle(5, 10)
console.log(areaTrian.area())
