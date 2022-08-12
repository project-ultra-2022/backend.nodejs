console.log("Archivo de Selena Merchan")
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
