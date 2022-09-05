let listaOrdenada: Array<number> = [];

function ordenarMenor(arreglo: Array<number>) {
  listaOrdenada.push(Math.min(...arreglo));

  let indice: number = arreglo.indexOf(Math.min(...arreglo));
  arreglo.splice(indice, 1);

  if (listaOrdenada.length < arreglo.length + listaOrdenada.length)
    ordenarMenor(arreglo);
}

ordenarMenor([2, -1, 6, 1, 7, -5]);
console.log(listaOrdenada);
