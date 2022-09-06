/*
Texto al revés

Haga que la función FirstReverse(str) tome el parámetro str que se está pasando y devuelva la cadena en orden inverso.

Ejemplos:
1. Entrada: coderbyte
Salida: etybredoc

2. Entrada: I Love Code
Salida: edoC evoL I

Dificultad: Fácil
*/

function firstReverse(str: string): string {
  console.log(str);
  return "";
}

// No modificar, es solo para comprobar que el código funciona
[
  ["coderbyte", "etybredoc"],
  ["I Love Code", "edoC evoL I"],
].forEach((test, i) => {
  console.log(
    firstReverse(test[0]) == test[1] ? i + 1 + ") Funciono" : i + 1 + ") Fallo"
  );
});
