function firstReverseSelena(str: string): string {
  for (let index = 1; index<=firstReverseSelena.length; index --) {

  }

  return str;
}

// No modificar, es solo para comprobar que el código funciona
[
  ["coderbyte", "etybredoc"],
  ["I Love Code", "edoC evoL I"],
].forEach((test, i) => {
  console.log(
    firstReverseSelena(test[0]) == test[1]
      ? i + 1 + ") Funciono"
      : i + 1 + ") Fallo"
  );
});
