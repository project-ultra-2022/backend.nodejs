class Rectangulo {
    alto:number
    ancho:number
    constructor(altoCuadrado:number, anchoCuadrado:number){
    this.alto = altoCuadrado
    this.ancho = anchoCuadrado
    }
    getArea():number{
        return this.alto * this.ancho
    }
}

const Cuadrado = new Rectangulo(10, 10)
console.log(Cuadrado.getArea())