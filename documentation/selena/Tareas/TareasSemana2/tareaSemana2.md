## // rangoHasta(n) -> Lista de números: dado un número "n", retorna la lista de números desde el 0 hasta el N incluído. Por ejemplo: rangoHasta(7) -> [0,1,2,3,4,5,6,7].

let arrayNum1: Array<number> = [];
function rangoHasta(hastaDonde: number, indice: number = 0): Array<number> {
  arrayNum1.push(indice);
  if (hastaDonde > indice) rangoHasta(hastaDonde, indice + 1);
  return arrayNum1;
}

//console.log(rangoHasta(7));

## // rango(desde, hasta) -> lista de números: similar a rango, pero ahora se puede especificar el "desde". Ej: rango(5, 10) -> [5,6,7,8,9,10]. No hace falta validar que desde sea menor a hasta o tener rangos decrecientes.

let arrayNum2: Array<number> = [];
function rango(
  Desde: number,
  Hasta: number,
  indice: number = Desde
): Array<number> {
  arrayNum2.push(indice);
  if (indice < Hasta) rango(Desde, Hasta, indice + 1);
  return arrayNum2;
}

console.log(rango(5, 15));
## //3. sumaHasta(n) -> numero. Retorna la suma de los numeros desde el 0 hasta el N. Por ejemplo.
## //Ejemplos:
## //sumaHasta(2) 1 + 2 = 3
## //sumaHasta(3) 1 + 2 + 3 = 6
## //sumaHasta(5) = 5 + 4 + 3 + 2 + 1 + 0 => 15
## //sumaHasta(10) 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
let result1: number = 0;
function sumNum1(count: number, indice: number = 1): number {
  result1 = result1 + indice;
  if (count > indice) sumNum1(count, indice + 1);
  return result1;
}
console.log(sumNum1(5));

## //4. removerTodos(lista, elemento): -> lista, Dada una lista y un elemento, retorna otra lista igual a la original, pero sin el "elemento" dado. En caso en que el elemento aparezca múltiples veces, lo remueve de todas.
//Ejemplo:
//remover([1,2,3,1,6,7,1,9,1], 1) -> [2,3,6,7,9]
//remover([1,2,3,4,5], 1) -> [2,3,4,5]
//remover([1,2,3,4,5], 3) -> [1,2,4,5]
//remover([1,2,3,4,5,5,4,3,2,1], 3) -> [1,2,4,5,5,4,2,1]

## //5. ordenar(numeros): Realizar una función que dada una lista de números retorne otra lista con los mismos números pero ordenados de menor a mayor. Pista: en una lista ordenada siempre se da que un elemento en la posición x es el mínimo de la sublista que sigue.
## Ejemplos:
## ordenar([3,6,-1]) -> [-1,3,6]
## ordenar([2,6,1,7]) -> [1,2,6,7]
## ordenar([2,-1,6,1,7,-5]) -> [-5,-1,1,2,6,7]

let aux: any;
let min = 0;
let arrayBorrarSelena: Array<number> = [5, 4, 1, 2, 6, -4, -1];
let arrayMeterSelena: Array<number> = [];

let sizeLoop = arrayBorrarSelena.length;

for (let index = 0; index < sizeLoop; index++) {
  min = Math.min(...arrayBorrarSelena);
  arrayMeterSelena.push(min);
  arrayBorrarSelena.splice(arrayBorrarSelena.indexOf(min), 1);
}

aux = arrayMeterSelena;
console.log(aux);

6. (OPCIONAL) Ver el siguiente material:
https://www.youtube.com/watch?v=ZpY5KdGQvwI&t=3755s
*/
