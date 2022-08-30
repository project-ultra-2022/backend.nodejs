function borrarElemento(lista: Array<number>, elemento: number) {
  let listaFinal: Array<number> = lista.filter((item) => item !== elemento);
  return console.log(listaFinal);
}

borrarElemento([1, 3, 2, 4, 2, 5, 1], 1);
