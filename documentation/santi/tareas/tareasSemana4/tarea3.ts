function findIntersectionSantiago(str: Array<string>): Array<string> {
  let arrayProvicional1: Array<string> = str[0].split("-");
  let arrayProvicional2: Array<string> = str[1].split("-");
  let arrayIntersection: Array<string> = [];
  for (let i = 0; i < arrayProvicional1.length; i++) {
    for (let j = 0; j < arrayProvicional2.length; j++) {
      if (arrayProvicional1[i] == arrayProvicional2[j]) {
        arrayIntersection.push(arrayProvicional1[i]);
      }
    }
  }
  console.log(arrayIntersection);
  return arrayIntersection;
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
    findIntersectionSantiago(test[0])[0] == test[1][0]
      ? i + 1 + ") Funciono"
      : i + 1 + ") Fallo"
  );
});
