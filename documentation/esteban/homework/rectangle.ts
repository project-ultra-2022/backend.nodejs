class Rectangle {
  height: number
  width: number
  constructor (heightR: number, widthT: number) {
    this.height = heightR
    this.width = widthT
  }

  area (): number {
    return this.height * this.width
  }
}
const areaRec = new Rectangle(10, 10)
console.log(areaRec.area())
