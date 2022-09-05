/*
Buscar intersección

Haga que la función FindIntersection(strArr) lea el array de cadenas almacenadas en strArr, que contendrá 2 elementos:
El primer elemento representará una lista de números separados por un guión (-)
El segundo elemento representará una segunda lista de números separados por un guión (-)

Su objetivo es devolver un array de una posición (string) separada por comas que contenga los números que aparecen en los elementos de strArr
Si no hay intersección, devuelve un array con una cadena vacia: ['']

Ejemplos:
1. Entrada: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
Salida: ["1,4,13"]

2. Entrada: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
Salida: ["1,9,10"]

Dificultad: Fácil
*/

function findIntersection(strArr: Array<string>): Array<string> {
  console.log(strArr);
  return [""];
}

// No modificar, es solo para comprobar que el código funciona
[
  [["1-3-4-7-13", "1-2-4-13-15"], ["1-4-13"]],
  [["1-3-9-10-17-18", "1-4-9-10"], ["1-9-10"]],
  [["1,2,3", "4,5,6"], [""]],
].forEach((test, i) => {
  console.log(
    findIntersection(test[0])[0] == test[1][0]
      ? i + 1 + ") Funciono"
      : i + 1 + ") Fallo"
  );
});
