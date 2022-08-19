console.log("Archivo de Selena Merchan");
class TrianguloS {
  private readonly altura: number;
  private readonly base: number;

  constructor(altura: number, base: number) {
    this.altura = altura;
    this.base = base;
  }

  area() {
    return (this.base * this.altura) / 2;
  }
}
const triangulito = new TrianguloS(10, 10);
console.log(triangulito.area());
