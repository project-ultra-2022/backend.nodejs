## ejemplo 1// triangulo
class Triangulo {
    constructor(altura, base) {
        this.altura = altura
        this.base = base

    }
    area() {
        return (this.base * this.altura)/2
    }
}
let triangulo = new Triangulo(10, 10)
console.log(triangulo.area())
## ejemplo 2// cuadrado
class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto
        this.ancho = ancho
    }
    area() {
        return this.alto * this.ancho
    }
}
let cuadrado = new Rectangulo(10, 10)
console.log(cuadrado.area())
## class Circulo {
    constructor(radio) {
        this.radio=radio
    }
    area() {
        return Math.round( this.radio * this.radio * Math.PI)
    }
}
let circulo = new Circulo(10)
console.log(circulo.area())
## ejemplo ts
class DrawFigures {
    private size: number
    private boardSize: number

    constructor (size: number){
        this.size = size + 1
        this.boardSize = this.size * 2
    }

