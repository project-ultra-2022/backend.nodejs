class MyPyramid {
  private readonly size: number
  private readonly boardSize: number

  constructor (size: number) {
    this.size = size
    this.boardSize = 9
  }

  buildPyramid () {
    if (this.validate(this.size)) {
      for (let i: number = 0; i <= this.size; i++) {
        this.printNumber(i, this.boardSize - i)
      }
    }
  }

  validate (num: number): boolean {
    try {
      if (num > 9) throw 'El número máximo es 9'
      if (num < 1) throw 'El número mínimo es 1'
      return true
    } catch (e: any) {
      console.log(e)
      return false
    }
  }

  printNumber (num: number, blankSpaces: number) {
    let result: string = ''
    result = this.printBlankSpaces(blankSpaces)
    for (let i: number = 0; i < num; i++) {
      result += ' ' + num
    }
    console.log(result)
  }

  printBlankSpaces (num: number) {
    let spaces: string = ''
    for (let i: number = 0; i < num; i++) {
      spaces += ' '
    }
    return spaces
  }
}

new MyPyramid(9).buildPyramid() // max 9
