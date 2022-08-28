function OrdenarNumeros(Lista: Array<number>) {
  return console.log(
    Lista.sort(function (a, b) {
      return a - b;
    })
  );
}
OrdenarNumeros([-98, -89, -65, 0, 8, 6, 4, 1]);
