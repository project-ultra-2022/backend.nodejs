
class Circle {
    radio:number
    constructor(radioC:number){
        this.radio = radioC
    }
    area(){
        return Math.round((this.radio*this.radio)*Math.PI)
    }
}
const areaCir = new Circle (5)
console.log(areaCir.area())
