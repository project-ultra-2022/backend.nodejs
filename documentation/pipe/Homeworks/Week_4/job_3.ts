function findIntersectionPipe(P: Array<string>): Array<string> {
  let recorrer = P[0].split("-");
  let recorrer2 = P[1].split("-");
  let arrayVacio = [];

  for (let i = 0; i < recorrer.length; i++) {
    for (let j = 0; j < recorrer2.length; j++) {
      if (recorrer2[j] == recorrer[i]) {
        arrayVacio.push(recorrer[i]);
      }
    }
  }
  console.log(arrayVacio);
  return arrayVacio;
}

[
  [
    ["1-3-4-7-13", "1-2-4-13-15"],
    ["1", "4", "13"],
  ],
  [
    ["1-3-9-10-17-18", "1-4-9-10"],
    ["1", "9", "10"],
  ],
  [["1,2,3", "4,5,6"], []],
].forEach((test, i) => {
  console.log(
    findIntersectionPipe(test[0])[0] == test[1][0]
      ? i + 1 + ") Funciono"
      : i + 1 + ") Fallo"
  );
});
