function EliminarNumeros(Numeros: Array<number>) {
  let NuevaLista: Array<number> = Numeros.filter((item, indice) => {
    return Numeros.indexOf(item) === indice;
  });
  console.log(NuevaLista);
}
EliminarNumeros([3, 6, 7, 6, 8, 0, 0, 5]);
