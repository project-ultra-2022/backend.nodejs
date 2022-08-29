//CIRCULO

class circulo{
    public radio : number

    constructor(radio : number){
        this.radio = radio
    }
    areaCirculo (){
        return Math.round(this.radio * this.radio * Math.PI )
    }
}
const area = new circulo (10)
console.log(area.radio)