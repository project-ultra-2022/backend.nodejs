console.log('Archivo de Daniel Valencia')

class DrawFigures {
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
      if (num > 9) {
        throw null;
      }
      if (num < 1){
        throw null;
      }
      return true
    } catch (e) {
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

new DrawFigures(9).buildPyramid() // max 9
