/*1. rangoHasta(n) -> Lista de números: dado un número "n", retorna la lista de números desde el 0 hasta el N incluído. 
Por ejemplo: rangoHasta(7) -> [0,1,2,3,4,5,6,7].

let ArrayRange: Array<number> = [];
function rangoHasta(indice: number, num1: number = 0): Array<number> {
  ArrayRange.push(num1);
  if (ArrayRange.length <= indice) rangoHasta(indice, num1 + 1);
  return ArrayRange;
}
console.log(rangoHasta(7));
*/

/*
N2
rango(desde, hasta) -> lista de números: similar a rango, pero ahora se puede especificar el "desde". Ej: rango(5, 10) -> [5,6,7,8,9,10].
No hace falta validar que desde sea menor a hasta o tener rangos decrecientes.

let arraynum: Array<number> = [];
function rangoHasta(
  Desde: number,
  Hasta: number,
  indice: number = Desde
): Array<number> {
  arraynum.push(indice);
  if (indice < Hasta) rangoHasta(Desde, Hasta, indice + 1);
  return arraynum;
}

console.log(rangoHasta(5, 15));
  */

/*
Num3
let IncrementNumbers: Array<number> = [];

function Numbers(Num: number) {
  SumNumber.push(Num);
  if (IncrementNumbers.length < Num + IncrementNumbers.length) Numbers(Num - 1);
  else {
    let Sum: number = IncrementNumbers.reduce(
      (count: number, number: number) => count + number,
      0
    );
    console.log(IncrementNumbers + " = " + Sum);
  }
}
Numbers(7);
*/

/*
N4
function EliminarNumeros(Numeros: Array<number>) {
  let NuevaLista: Array<number> = Numeros.filter((item, indice) => {
    return Numeros.indexOf(item) === indice;
  });
  console.log(NuevaLista);
}
EliminarNumeros([3, 6, 7, 6, 8, 0, 0, 5]);
*/

/*
N5
console.log([-80, 9, 100, -1, 50, -4].sort((a, b) => a - b));
*/
