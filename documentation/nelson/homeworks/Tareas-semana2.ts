let rangoHastaNelson: Array<number> = [];

function rangoNelson(num: number, desde: number = 0) {
  rangoHastaNelson.push(desde);
  if (rangoHastaNelson.length <= num) rangoNelson(num, desde + 1);
  return rangoHastaNelson;
}

console.log(rangoNelson(7));

// 2

let arreglo: Array<number> = [];

function rangos(desde: number, hasta: number) {
  arreglo.push(desde);
  if (arreglo.length < hasta - desde + arreglo.length) rangos(desde + 1, hasta);
  return arreglo;
}

// console.log(rangos(8, 15));

// 3

let lista: Array<number> = [];

function suma(num: number) {
  lista.push(num);
  if (lista.length < num + lista.length) suma(num - 1);
  else {
    let total: number = lista.reduce((contador, item) => contador + item, 0);
    console.log(lista, " la suma del arreglo es: ", total);
  }
}

suma(10);

// 4

function borrarElemento(lista: Array<number>, elemento: number) {
  let listaFinal: Array<number> = lista.filter((item) => item !== elemento);
  return console.log(listaFinal);
}

// borrarElemento([1, 3, 2, 4, 2, 5, 1], 1);

//
function ordenar(arreglo: Array<number>) {
  return console.log(
    arreglo.sort(function (a: number, b: number) {
      return a - b;
    })
  );
}

// ordenar([1, 0, -4, -8, 10, 15, 50, -50]);

/**
 * Retroalimentación
 * 8/10 No se utilizo recursividad en los últimos dos
 */
