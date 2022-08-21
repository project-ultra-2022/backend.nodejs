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
