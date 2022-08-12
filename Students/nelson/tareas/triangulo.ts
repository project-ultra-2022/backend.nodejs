class Triangulo{
    altura:number
    base:number
    constructor(baseTriangulo:number, alturaTriangulo:number){
        this.base = baseTriangulo
        this.altura = alturaTriangulo
    }
    getArea(){
        return (this.base * this.altura) / 2
    }
    
    
}

const AreaTriangulo = new Triangulo(10, 10)
console.log(AreaTriangulo.getArea())