## ejercicio triangulo
class Triangulo {
    private altura: number
    private base: number

   constructor (altura: number, base: number){
       this.altura = altura 
       this.base =base
   }
   area() {
       return (this.base* this.altura)/2
   }
}
let triangulito = new Triangulo(10, 10)
console.log(triangulito.area())
## ejercicio cuadrado
class Rectangulo {
    private alto: number
    private ancho: number

    constructor (alto: number, ancho: number){
        this.alto = alto
        this.ancho =ancho
    }
    area() {
        return this.alto * this.ancho
    }
}
let cuadrado = new Rectangulo(10, 10)
console.log(cuadrado.area())
## ejercicio Circulo
class Circulo {
    private radio: number
    constructor (radio: number){
        this.radio = radio
    }
    area() {
        return Math.round( this.radio * this.radio * Math.PI)
    }
}
let circulito = new Circulo(10)
console.log(circulito.area())
