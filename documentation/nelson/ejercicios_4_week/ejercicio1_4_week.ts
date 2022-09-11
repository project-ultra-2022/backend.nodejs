function firstReverseNelson(str: string): string {
  let arrayProvicional: Array<string> = [];
  let stringProvicional: string = "";
  for (let i = 0; i < str.length; i++) {
    arrayProvicional.unshift(str[i]);
  }
  for (let j = 0; j < arrayProvicional.length; j++) {
    stringProvicional += arrayProvicional[j];
  }

  return stringProvicional;
}

// No modificar, es solo para comprobar que el código funciona
[
  ["coderbyte", "etybredoc"],
  ["I Love Code", "edoC evoL I"],
].forEach((test, i) => {
  console.log(
    firstReverseNelson(test[0]) == test[1]
      ? i + 1 + ") Funciono"
      : i + 1 + ") Fallo"
  );
});
