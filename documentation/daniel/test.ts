console.log("Archivo de Daniel Valencia")

class Circunferencia{
    public radio: number
    constructor (RadioCircunferencia: number){
        this.radio = RadioCircunferencia
    }
    getArea():Number{
        return Math.round(this.radio * this.radio * Math.PI)
    }

}

const Circulo = new Circunferencia(10)
console.log(Circulo.getArea())