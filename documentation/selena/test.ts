function firstReverse(str: string): string {
  let arrayStr: Array<string> = str.split("");
  let result: Array<string> = [];
  const numeroquenovaacambiar = arrayStr.length; // (4)
  // 4    <    4
  for (let index = 0; index < numeroquenovaacambiar; index++) {
    const letra = arrayStr[arrayStr.length - 1];
    result.push(letra);
    arrayStr.pop();
  }
  return result.join("");
}

// No modificar, es solo para comprobar que el código funciona
[
  ["coderbyte", "etybredoc"],
  ["I Love Code", "edoC evoL I"],
].forEach((test, i) => {
  console.log(
    firstReverse(test[0]) == test[1] ? i + 1 + ") Funciono" : i + 1 + ") Fallo"
  );
});
