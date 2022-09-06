/*
Dado un número de pisos
piramideNumerosPrimos(5)

Realizar una pirámide de lado con los números primos

Ejemplo de pirámide de 5 pisos

2
3 3
5 5 5
7 7 7 7
11 11 11 11 11
*/

let numeroDePisos: number = 8;

function piramidePrimos(pisos: number) {
  let numerosPrimos: Array<number> = [];
  let noparar: Boolean = true;
  for (let i = 2; noparar; i++) {
    let primos: Boolean = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        primos = false;
      }
    }
    if (primos) {
      numerosPrimos.push(i);
      if (numerosPrimos.length == pisos) {
        noparar = false;
      }
    }
  }

  for (let i = 0; i <= numerosPrimos.length - 1; i++) {
    let stringPrimos: string = "";

    for (let j = 0; j <= i; j++) {
      stringPrimos += numerosPrimos[i] + " ";
    }

    console.log(stringPrimos);
  }
}

piramidePrimos(numeroDePisos);
