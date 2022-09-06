function RemoverNumeros(Lista: Array<number>) {
  let ListaFinal: Array<number> = Lista.filter((item, indice) => {
    return Lista.indexOf(item) === indice;
  });
  console.log(ListaFinal);
}
RemoverNumeros([1, 2, 2, 9, 9, 0, 4, 4]);

/**
 * Retroalimentación
 * No utlizaste recursividad
 */
