function ordenar(arreglo: Array<number>) {
  return console.log(
    arreglo.sort(function (a: number, b: number) {
      return a - b;
    })
  );
}

ordenar([1, 0, -4, -8, 10, 15, 50, -50]);
