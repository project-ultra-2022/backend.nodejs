console.log("Archivo de Daniel Valencia")

class DrawFigures {
    private size: number
    private boardSize: number

    constructor (size: number){
        this.size = size + 1
        this.boardSize = this.size * 2
    }

    buildPyramid() {
        for(let i: number = 0; i < this.size; i++) {
            this.printNumber(i, this.boardSize - i)
        }
    }

    printNumber(num: number, blankSpaces: number) {
        let result: string = ''
        result = this.printBlankSpaces(blankSpaces)
        for(let i: number = 0; i < num; i++){
            if(i !== 0) result += ' '
            result += num
        }
        result += this.printBlankSpaces(blankSpaces)
        console.log(result)
    }

    printBlankSpaces(num: number) {
        let spaces: string = ''
        for(let i: number = 0; i < num; i++){
            spaces += ' '
        }
        return spaces
    }
}

new DrawFigures(9).buildPyramid() // max 9